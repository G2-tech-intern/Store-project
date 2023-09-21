const { ProductController } = require("../../http/controllers/admin/product/product.controller");
const { uploadFile } = require("../../utils/multer");

const router = require("express").Router();

router.get("/list", ProductController.getAllProducts);

router.get("/:id" , ProductController.getOneProduct);

router.post(
    "/add",
    uploadFile.array("images" , 10),
    ProductController.addProduct
);

// router.patch("/edit/:id");

router.delete("/remove/:id" , ProductController.removeProduct);

module.exports = {
    AdminApiProductRouter: router,
};
