const {Router} = require("express")
const { register, login, SuperAdmin } = require("../controller/user.controller")
const { superadmintekshiruvchi } = require("../middleware/tekshiruv")

const UserRouter = Router()

UserRouter.post("/register", register)
UserRouter.post("/login", login)
UserRouter.put("/super_admin/:id", superadmintekshiruvchi, SuperAdmin)

module.exports = UserRouter