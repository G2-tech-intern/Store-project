const { ProductController } = require("../../http/controllers/admin/product/product.controller");

const router = require("express").Router();

router.get("/list", ProductController.getAllProducts);

// router.get("/:id");

// router.post("/add");

// router.patch("/edit/:id");

// router.delete("/remove/:id");

module.exports = {
    AdminApiProductRouter: router,
};
