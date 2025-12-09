const {Router} = require("express")
const { tekshiruvchi } = require("../middleware/admin-verify");
const { delete_Checked, update_Checked } = require("../controller/cheket.controller");

const CheketRouter = Router()

CheketRouter.put("/update_checked/:id", tekshiruvchi, update_Checked);
CheketRouter.delete("/delete_checked", tekshiruvchi, delete_Checked);

module.exports = {
    CheketRouter
}