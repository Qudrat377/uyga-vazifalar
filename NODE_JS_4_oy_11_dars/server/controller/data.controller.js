const { read_file, write_file } = require("../fs/file-manager");
const { v4 } = require("uuid");
 
// get 

const get_all_Data = async (req, res) => {
  try {
    const fileData = read_file("data.json");
    res.status(200).json(fileData);
  } catch (error) {
    console.log(error.message);
  }
};

// add 

const add_Data = async (req, res) => {
  try {
    const fileData = read_file("data.json");
    const { title, price, count } = req.body;
    fileData.push({
      id: v4(),
      title,
      price,
      count,
    });
    write_file("data.json", fileData);
    res.status(201).json({
      message: "yangi malumot saqlandi",
    });
  } catch (error) {
    console.log(error.message, "controldagi malumot qo'shishda xato");
  }
};

// get one 

const get_one_Data = async (req, res) => {
  try {
    const { id } = req.params;
    const fileData = read_file("data.json");

    const foundedData = fileData.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.status(200).json(foundedData);
  } catch (error) {
    console.log(error.message);
  }
};

// update

const update_Data = async (req, res) => {
  try {
    const { title, price, count } = req.body;
    const { id } = req.params;
    const fileData = read_file("data.json");

    const foundedData = fileData.find((item) => item.id === id);
    if (!foundedData) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    fileData.forEach((item) => {
      if (item.id === id) {
        item.title = title ? title : item.title;
        item.price = price ? price : item.price;
        item.count = count ? count : item.count;
      }
    });
    write_file("data.json", fileData);
    res.status(201).json({
      message: "Malumot yangilandi",
    });
  } catch (error) {
    console.log(error.message);
  }
};

// delete 

const delete_Data = async (req, res) => {
  try {
    const {id} = req.params
    const fileData = read_file("data.json")

    const foundedData = fileData.find((item) => item.id === id)
    if (!foundedData) {
        return res.status(404).json({
            message: "Malumot topilmadi"
        })
    }

    fileData.forEach((item, index) => {
        if (item.id === id) {
            fileData.splice(index, 1)
        }
    })
    write_file("data.json", fileData)
    res.status(201).json({
        message: "Malumot o'chirildi"
    })
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  get_all_Data,
  get_one_Data,
  add_Data,
  update_Data,
  delete_Data,
};
