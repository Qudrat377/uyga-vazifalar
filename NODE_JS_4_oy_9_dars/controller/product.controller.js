const { read_file, write_file } = require("../fs/file-manager");
const { v4 } = require("uuid");

const getAllProducts = async (req, res) => {
  try {
    const products = read_file("product.json");
    res.status(200).render("index", { products });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get one product

const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = read_file("product.json");

    const foundedProduct = products.find((products) => products.id === id);

    if (!foundedProduct) {
      return res.status(302).redirect("http://localhost:4017/get_all_products");
    }

    res.status(200).render("details", { foundedProduct });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// add product

const addProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const products = read_file("product.json");

    products.push({
      id: v4(),
      title,
      price,
      description,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    });

    write_file("product.json", products);
    res.status(302).redirect("http://localhost:4017/get_all_products");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// update product

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;
    const products = read_file("product.json");

    const foundedProduct = products.find((product) => product.id === id);

    if (!foundedProduct) {
      return res
        .status(302)
        .redirect("http://locsalhost:4017/get_all_products");
    }

    products.forEach((item) => {
      if (item.id === id) {
        item.title = title ? title : item.title;
        item.description = description ? description : item.description;
        item.price = price ? price : item.price;
      }
    });

    write_file("product.json", products);
    res.status(302).redirect("http://localhost:4017/get_all_products");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// delete Product

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = read_file("product.json");

    const foundedProduct = products.find((product) => product.id === id);

    if (!foundedProduct) {
      return res.status(302).redirect("http://localhost:4017/get_all_products");
    }

    products.forEach((item, index) => {
      if (item.id === id) {
        products.splice(index, 1);
      }
    });

    write_file("product.json", products);
    res.status(302).redirect("http://localhost:4017/get_all_products");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
