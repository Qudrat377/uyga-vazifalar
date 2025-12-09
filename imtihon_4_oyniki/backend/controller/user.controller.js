const bcrypt = require("bcryptjs");
const { v4 } = require("uuid");
const tokenGenerator = require("../Utils/token-generator");
const jwt = require("jsonwebtoken");
const { read_file, write_file } = require("../fs/file-manager");
const { xabar_yuborish } = require("../Utils/email-sender");

// register

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "username, email, password talab qilinadi",
      });
    }

    const malumot = read_file("user.json");
    const topilgan_email = malumot.find((bolak) => bolak.email === email);

    if (topilgan_email) {
      return res.status(401).json({
        message: "Email avvaldan bor",
      });
    }

    const topilgan_Shaxs = malumot.find((qism) => qism.username === username);

    if (topilgan_Shaxs) {
      return res.status(401).json({
        message: "username avvaldan bor",
      });
    }

    const hash = await bcrypt.hash(password, 12);

    const email_codini_tayyorlash = +Array.from({ length: 6 }, () =>
      Math.ceil(Math.random() * 9)
    ).join("");
    console.log(email, email_codini_tayyorlash);

    await xabar_yuborish(email, email_codini_tayyorlash);

const yangiUser = {
    id: v4(),
      username,
      email,
      role: "admin",
      password: hash,
}

    malumot.push(yangiUser);

    write_file("user.json", malumot);

    const payload = {
      id: yangiUser.id,
      username: yangiUser.username,
      email:yangiUser.email,
      role:yangiUser.role
    }
    const token = tokenGenerator(payload)

    res.status(201).json({
      message: "Ro'yxatga olindi va LOCALSTORAGEGA YOZILDI tekshiring",
      token,
      user: {
        id: yangiUser.id,
        username: yangiUser.username,
        email:yangiUser.email,
        role: yangiUser.role
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email, password talab qilinadi",
      });
    }

    const malumot = read_file("user.json");
    const topilgan_Shaxs = malumot.find((bolak) => bolak.email === email);

    if (!topilgan_Shaxs) {
      return res.status(404).json({
        message: "Foydalanuvchi topilmadiiiii",
      });
    }

    const decode = await bcrypt.compare(password, topilgan_Shaxs.password);
    if (decode) {
      const payload = {
        username: topilgan_Shaxs.username,
        id: topilgan_Shaxs.id,
        email: topilgan_Shaxs.email,
        role: topilgan_Shaxs.role,
      };
      const token = tokenGenerator(payload);

      res.status(201).json({
        message: "Success",
        token,
      });
    } else {
      return res.status(401).json({
        message: "password xato",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Username 


const get_username_from_token = (req, res) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      return res.status(401).json({ message: "Token topilmadi" });
    }

    const token = bearerToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const users = read_file("user.json");
    const user = users.find(u => u.id === decoded.id);

    if (!user) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
    }

    res.status(200).json({ username: user.username });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  get_username_from_token
};