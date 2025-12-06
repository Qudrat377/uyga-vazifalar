const { read_file, write_file } = require("../fs/file-manager");
const { v4 } = require("uuid");

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
    const { id } = req.params;
    const fielData = read_file("todo.json");

    const foundedTodo = fielData.find((item) => item.id === id);
    if (!foundedTodo) {
      return res.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    res.status(200).json(foundedTodo);
  } catch (error) {
    console.log(error.message, "b>C>td>get_one_t");
  }
};

// add

const add_Todo = async (req, res) => {
  try {
    const { yugurish, dars, ishlar, hobby, tomorrow } = req.body;
    const fileData = read_file("todo.json");

    fileData.push({
      id: v4(),
      yugurish,
      dars,
      ishlar,
      hobby,
      tomorrow,
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
    const { yugurish, dars, ishlar, hobby, tomorrow } = req.body;
    const fileData = read_file("todo.json");

    const foundedData = fileData.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    fileData.forEach((item) => {
      if (item.id === id) {
        item.yugurish = yugurish ? yugurish : item.yugurish;
        item.dars = dars ? dars : item.dars;
        item.ishlar = ishlar ? ishlar : item.ishlar;
        item.hobby = hobby ? hobby : item.hobby;
        item.tomorrow = tomorrow ? tomorrow : item.tomorrow;
        item.time = `${new Date().getHours()}:${new Date().getMinutes()}`;
      }
    });
    write_file("todo.json", fileData);
    res.status(201).json({
      message: "Malumot qayta yangilandi",
    });
  } catch (error) {
    console.log(error.message, "b>C>td>upd_t");
  }
};

// delete

const delete_Todo = async (req, res) => {
  try {
    const { id } = req.params;
    const fileData = read_file("todo.json");

    const foundedData = fileData.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({
        message: "Malumot topilmadi",
      });
    }
    fileData.forEach((item, index) => {
      if (item.id === id) {
        fileData.splice(index, 1);
      }
    });
    write_file("todo.json", fileData);
    res.status(201).json({
      message: "Malumot o'chirildi",
    });
  } catch (error) {
    console.log(error.message, "b>C>td>del_t");
  }
};

module.exports = {
  get_all_Todo,
  get_one_Todo,
  add_Todo,
  update_Todo,
  delete_Todo,
};
