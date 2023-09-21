const { AdminApiProductRouter } = require("./product.router");

const router = require("express").Router();

router.use(
    "/products",
    AdminApiProductRouter
);
module.exports = {
    AdminRoutes: router,
};
