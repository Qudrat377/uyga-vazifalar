const { read_file, write_file } = require("../fs/file-manager");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");

// get

const get_all_Todo = async (req, res) => {
  try {
    const fileData = read_file("todo.json");
    res.status(200).json(fileData);
  } catch (error) {
    console.log(error.message, "b>C>td>get_all_t");
  }
};

// get one

const get_one_Todo = async (req, res) => {
  try {
    const bearerToken = req.headers.authorization;
    const { id } = req.params;

    if (!bearerToken) {
      return res.status(401).json({
        message: "Token topilmadi. Avval login qiling!",
      });
    }

    const token = bearerToken.split(" ");
    const decode = jwt.verify(token[1], process.env.SECRET_KEY);

    const fileUsers = read_file("user.json");
    const fileData = read_file("todo.json");

    // console.log(decode.id, "decode_id");
    const user = fileUsers.find((item) => item.id === decode.id);

    if (!user) {
      return res.status(404).json({
        message: "User topilmadi yoki login qilinmagan",
      });
    }

    const todo = fileData.find(
      (item) => item.id === id && item.oner_id === decode.id
    );

    if (!todo) {
      return res.status(404).json({
        message:
          "sizda bu id ostida malumot yo'q yoki bu iddagi malumot sizniki emas",
      });
    }

    res.status(200).json({
      message: "Sizning Todo malumotingiz",
      todo,
    });
  } catch (error) {
    console.log(error.message, "b>C>td>get_one_t");
  }
};

// add

const add_Todo = async (req, res) => {
  try {
    const { todo_item } = req.body;
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ");
    const decode = jwt.verify(token[1], process.env.SECRET_KEY);
    // console.log(decode.id, "addni ichidan");

    const fileUsers = read_file("user.json");
    const fileData = read_file("todo.json");

    const foundedUserId = fileUsers.find((item) => item.id === decode.id);
    if (!foundedUserId) {
      return res.status(404).json({
        message: "Iltimos login qiling",
      });
    }
    // console.log(foundedUserId.id, "addning ichidan");

    fileData.push({
      oner_id: foundedUserId.id,
      id: v4(),
      todo_item,
      checked: false,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    });
    write_file("todo.json", fileData);
    res.status(201).json({
      message: "Yangi malumot qo'shildi",
    });
  } catch (error) {
    console.log(error.message, "b>C>td>add_t");
  }
};

// update
const update_Todo = async (req, res) => {
  try {
    const { id } = req.params;
    const { todo_item } = req.body;

    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ");
    const decode = jwt.verify(token[1], process.env.SECRET_KEY);

    const fileData = read_file("todo.json");
    const fileUsers = read_file("user.json");

    const user = fileUsers.find((item) => item.id === decode.id);

    if (!user) {
      return res.status(404).json({
        message: "Iltimos login qiling",
      });
    }

    const todo = fileData.find(
      (item) => item.id === id && item.oner_id === decode.id
    );

    if (!todo) {
      return res.status(404).json({
        message:
          "sizda bu id ostida malumot yo'q yoki bu iddagi malumot sizniki emas",
      });
    }

    todo.todo_item = todo_item || todo.todo_item;
    todo.time = `${new Date().getHours()}:${new Date().getMinutes()}`;

    write_file("todo.json", fileData);

    res.status(201).json({
      message: "Todo qayta yangilandi",
    });
  } catch (error) {
    console.log(error.message, "b>C>td>upd_t");
  }
};

// delete

const delete_Todo = async (req, res) => {
  try {
    const { id } = req.params;

    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ");
    const decode = jwt.verify(token[1], process.env.SECRET_KEY);

    const fileData = read_file("todo.json");
    const fileUsers = read_file("user.json")

    const user = fileUsers.find((item) => item.id === decode.id);

    if (!user) {
      return res.status(404).json({
        message: "Iltimos login qiling",
      });
    }

    const todo = fileData.find((item) => item.id === id && item.oner_id === decode.id);

    if (!todo) {
      return res.status(404).json({
        message: "sizda bu id ostida malumot yo'q yoki bu iddagi malumot sizniki emas",
      });
    }

    fileData.forEach((item, index) => {
      if (item.id === id) {
        fileData.splice(index, 1)
      }
    })

    write_file("todo.json", fileData);

    res.status(200).json({
      message: "Todo o'chirildi",
    });
  } catch (error) {
    console.log(error.message, "delete_todo_error");
  }
};

module.exports = {
  get_all_Todo,
  get_one_Todo,
  add_Todo,
  update_Todo,
  delete_Todo,
};
