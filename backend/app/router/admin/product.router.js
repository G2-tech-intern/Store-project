const { ProductController } = require("../../http/controllers/admin/product/product.controller");
const { VerifyAccessToken } = require("../http/middlewares/verifyAccessToken");
const { uploadFile } = require("../../utils/multer");

const router = require("express").Router();

router.get("/list", ProductController.getAllProducts);

router.get("/:id" , ProductController.getOneProduct);

router.post(
    "/add",VerifyAccessToken,
    uploadFile.array("images" , 10),
    ProductController.addProduct
);

router.patch(
    "/edit/:id",VerifyAccessToken,
    uploadFile.array("images", 10),
    ProductController.editProduct
);

router.delete("/remove/:id" , VerifyAccessToken ,ProductController.removeProduct);

module.exports = {
    AdminApiProductRouter: router,
};
