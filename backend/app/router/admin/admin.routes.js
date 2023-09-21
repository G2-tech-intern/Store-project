const { AdminApiProductRouter } = require("./product.router");
const { AdminApiUserRouter } = require("./user.router");

const router = require("express").Router();

router.use(
    "/products",
    AdminApiProductRouter
);
router.use(
    "/users",
    AdminApiUserRouter
);
module.exports = {
    AdminRoutes: router,
};
