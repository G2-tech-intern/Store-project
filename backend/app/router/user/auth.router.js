const { UserAuthController } = require("../../http/controllers/user/auth/auth.controller");
const router = require("express").Router();

router.post("/get-otp" , UserAuthController.getOtp)
router.post("/check-otp" , UserAuthController.checkOtp)

module.exports = {
    UserAuthRoutes : router
}