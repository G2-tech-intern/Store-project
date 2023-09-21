const { AdminRoutes } = require("./admin/admin.routes");

const router = require("express").Router();

router.use('/admin' , AdminRoutes);
// router.use('/user');
// router.use('/product');

module.exports = {
    AllRoutes: router
}