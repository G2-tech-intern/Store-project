const { AdminUserController } = require("../../http/controllers/admin/user/user.controller");
const { VerifyAccessToken } = require("../../http/middlewares/verifyAccessToken");
const router = require("express").Router();

router.patch("/update-profile",VerifyAccessToken 
    , AdminUserController.updateUserProfile)
router.patch("/delete",VerifyAccessToken 
    , AdminUserController.deleteUser)
router.get("/list" 
    , AdminUserController.getAllUsers)
router.get("/profile" 
    , AdminUserController.userProfile)
module.exports = {
    AdminApiUserRouter : router
}