const {Router} = require("express")
const { getAllProduct, getOneProduct, postProduct, updateProduct, deleteProduct } = require("../controller/product.controller")
const {tekshiruvchi} = require("../middleware/tekshiruv")

const malumot_uzatuvchi = Router()

malumot_uzatuvchi.get("/get_all_product", getAllProduct)
malumot_uzatuvchi.get("/get_one_product/:id", getOneProduct)
malumot_uzatuvchi.post("/add_product",tekshiruvchi , postProduct)
malumot_uzatuvchi.put("/update_product/:id",tekshiruvchi , updateProduct)
malumot_uzatuvchi.delete("/delete_product/:id",tekshiruvchi , deleteProduct)
module.exports = malumot_uzatuvchi