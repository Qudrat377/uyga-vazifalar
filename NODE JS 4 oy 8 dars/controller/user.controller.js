const { malumotni_oqish, malumotni_yozish } = require("../fs/file-sistem");
const bcrypt = require("bcryptjs");
const { v4 } = require("uuid");
const { xabar_yuborish } = require("../Utils/email-sender");
const tokenGenerator = require("../Utils/token-generator");
const jwt = require("jsonwebtoken");

// register

const register = async (keluvch, chiquvchi) => {
  try {
    const { shaxsismi, email, kalit } = keluvch.body;

    if (!shaxsismi || !email || !kalit) {
      return chiquvchi.status(400).json({
        message: "Shaxsismi, email, kalit talab qilinadi",
      });
    }

    const malumot = malumotni_oqish("user.json");
    const topilgan_email = malumot.find((bolak) => bolak.email === email);

    if (topilgan_email) {
      return chiquvchi.status(401).json({
        message: "Email avvaldan bor",
      });
    }

    const topilgan_Shaxs = malumot.find((qism) => qism.shaxsismi === shaxsismi);

    if (topilgan_Shaxs) {
      return chiquvchi.status(401).json({
        message: "Shaxsismi avvaldan bor",
      });
    }

    const hash = await bcrypt.hash(kalit, 12);

    const email_codini_tayyorlash = +Array.from({ length: 6 }, () =>
      Math.ceil(Math.random() * 9)
    ).join("");
    console.log(email, email_codini_tayyorlash);

    await xabar_yuborish(email, email_codini_tayyorlash);

    malumot.push({
      id: v4(),
      shaxsismi,
      email,
      role: "user",
      kalit: hash,
    });

    malumotni_yozish("user.json", malumot);

    chiquvchi.status(201).json({
      message: "Ro'yxatga olindi",
    });
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message,
    });
  }
};

// login

const login = async (keluvch, chiquvchi) => {
  try {
    const { email, kalit } = keluvch.body;

    if (!email || !kalit) {
      return chiquvchi.status(400).json({
        message: "Email, kalit talab qilinadi",
      });
    }

    const malumot = malumotni_oqish("user.json");
    const topilgan_Shaxs = malumot.find((bolak) => bolak.email === email);

    if (!topilgan_Shaxs) {
      return chiquvchi.status(404).json({
        message: "Foydalanuvchi topilmadiiiii",
      });
    }

    const decode = await bcrypt.compare(kalit, topilgan_Shaxs.kalit);
    if (decode) {
      const payload = {
        id: topilgan_Shaxs.id,
        email: topilgan_Shaxs.email,
        role: topilgan_Shaxs.role,
      };
      const token = tokenGenerator(payload);

      chiquvchi.status(201).json({
        message: "Success",
        token,
      });
    } else {
      return chiquvchi.status(401).json({
        message: "Kalit xato",
      });
    }
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message,
    });
  }
};

// admin tayinlash

const SuperAdmin = async (keluvchi, chiquvchi) => {
  try {
    const malumot = malumotni_oqish("user.json");
    const { id } = keluvchi.params;

    const topilgan_Shaxs = malumot.find((bolak) => bolak.id === id);
    const { role } = keluvchi.body;

    if (!topilgan_Shaxs) {
      return chiquvchi.status(404).json({
        message: "ID bo'yicha malumot topilmadi",
      });
    }

    if (!role) {
      return chiquvchi.status(404).json({
        message: "Malumot topilmadi",
      });
    }

    malumot.forEach((bolak) => {
      if (bolak.id === id) {
        bolak.role = role ? role : bolak.role;
      }
    });

    malumotni_yozish("user.json", malumot);
    chiquvchi.status(201).json({
      message: "Adminga tayinlandid",
    });
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message,
    });
  }
};

// get_all_users

const getAllUsers = async (keluvch, chiquvchi) => {
  try {
    const malumot = malumotni_oqish("user.json")
    chiquvchi.status(200).json(malumot)
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message
    })
  }
}

// get one user

const getOneUser = async (keluvch, chiquvchi) => {
  try {
    const {id} = keluvch.params
    const malumot = malumotni_oqish("user.json")

    const topilgan_Shaxs = malumot.find((bolak) => bolak.id === id)

    if (!topilgan_Shaxs) {
      return chiquvchi.status(404).json({
        message: "Bu ID ostida xechkim topilmadi"
      })
    }

    chiquvchi.status(200).json(topilgan_Shaxs)
  } catch (error) {
    chiquvchi.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  register,
  login,
  SuperAdmin,
  getAllUsers,
  getOneUser
};
