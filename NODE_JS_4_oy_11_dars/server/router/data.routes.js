const {Router} = require("express")
const { get_all_Data, get_one_Data, add_Data, update_Data, delete_Data } = require("../controller/data.controller")
const authorization = require("../middleware/authorization")

const dataRouter = Router()

dataRouter.get("/get_all_data", get_all_Data)
dataRouter.get("/get_one_data/;id", get_one_Data)
dataRouter.post("/add_data", authorization, add_Data)
dataRouter.put("/update_data/:id", authorization, update_Data)
dataRouter.delete("/delete_data/:id", authorization, delete_Data)

module.exports = dataRouter