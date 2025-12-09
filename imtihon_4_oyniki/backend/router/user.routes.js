const {Router} = require("express")
const { register, login, get_username_from_token } = require("../controller/user.controller")

const UserRouter = Router()

UserRouter.post("/register", register)
UserRouter.post("/login", login)
UserRouter.get("/get_username", get_username_from_token);

module.exports = UserRouter