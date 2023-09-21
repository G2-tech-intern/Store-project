const { AdminRoutes } = require("./admin/admin.routes");
const { UserAuthRoutes } = require("./user/auth.router");
const { VerifyAccessToken } = require("../http/middlewares/verifyAccessToken");

const router = require("express").Router();

router.use('/admin' , VerifyAccessToken, AdminRoutes);
router.use('/user', UserAuthRoutes);
// router.use('/product');

module.exports = {
    AllRoutes: router
}