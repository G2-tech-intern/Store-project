const { AdminRoutes } = require("./admin/admin.routes");
const { UserAuthRoutes } = require("./user/auth.router");

const router = require("express").Router();

router.use('/admin' , AdminRoutes);
router.use('/user', UserAuthRoutes);
// router.use('/product');

module.exports = {
    AllRoutes: router
}