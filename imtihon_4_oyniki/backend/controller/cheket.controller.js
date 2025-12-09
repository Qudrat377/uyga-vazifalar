const { read_file, write_file } = require("../fs/file-manager");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");

// update cheket

const update_Checked = async (req, res) => {
  try {
    const { id } = req.params;
    const { checked } = req.body;

    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ");
    const decode = jwt.verify(token[1], process.env.SECRET_KEY);

    const fileData = read_file("todo.json");

    // Faqat o'zining TODO sini qidiradi
    const todo = fileData.find(
      (item) => item.id === id && item.oner_id === decode.id
    );

    if (!todo) {
      return res.status(404).json({
        message: "Bu todo sizga tegishli emas yoki topilmadi!",
      });
    }

    // Checked qiymatini yangilash
    todo.checked = checked;

    write_file("todo.json", fileData);

    res.status(200).json({
      message: "Checked holati yangilandi!",
    });
  } catch (error) {
    console.log(error.message, "update_checked_error");
  }
};

// delete cheket 

const delete_Checked = async (req, res) => {
  try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ");
    const decode = jwt.verify(token[1], process.env.SECRET_KEY);

    const fileData = read_file("todo.json");

    // checked = true bo'lgan O'ZINI todo-larini o'chiramiz
    const newList = fileData.filter(
      (item) => !(item.checked === true && item.oner_id === decode.id)
    );

    write_file("todo.json", newList);

    res.status(200).json({
      message: "Belgilangan (checked) todolar o‘chirildi!",
    });
  } catch (error) {
    console.log(error.message, "delete_checked_error");
  }
};


module.exports = {
  update_Checked,
  delete_Checked
};
