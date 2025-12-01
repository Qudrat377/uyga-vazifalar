const {Router} = require("express")
const { register, login, SuperAdmin, getAllUsers, getOneUser } = require("../controller/user.controller")
const { superadmintekshiruvchi } = require("../middleware/tekshiruv")

const UserRouter = Router()

UserRouter.post("/register", register)
UserRouter.post("/login", login)
UserRouter.put("/super_admin/:id", superadmintekshiruvchi, SuperAdmin)
UserRouter.get("/get_all_users", superadmintekshiruvchi, getAllUsers)
UserRouter.get("/get_one_user/:id", superadmintekshiruvchi, getOneUser)

module.exports = UserRouter