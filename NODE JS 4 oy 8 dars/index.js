const express = require("express")
require("dotenv").config()
const cosr = require("cors")
const UserRouter = require("./router/user.routes")
const malumot_uzatuvchi = require("./router/product.routes")

const app = express()
app.use(cosr())
app.use(express.json())
const PORT = process.env.PORT || 3000

// router
app.use(UserRouter)
app.use(malumot_uzatuvchi)

app.listen(PORT, () => {
    console.log("Server is running at:", PORT)
})