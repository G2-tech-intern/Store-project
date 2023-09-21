const Controller = require("../../controller");
const {
    addProductSchema,
} = require("../../../validators/admin/product.schema");
const { ProductModel } = require("../../../../models/product.model");
const path = require("path");
const createHttpError = require("http-errors");
const { StatusCodes: StatusCodes } = require("http-status-codes");

class ProductController extends Controller {
    async addProduct(req, res, next) {
        try {
        } catch (err) {
            next(err);
        }
    }
    async editProduct(req, res, next) {
        try {
        } catch (err) {
            next(err);
        }
    }
    async removeProduct(req, res, next) {
        try {
        } catch (err) {
            next(err);
        }
    }
    async getAllProducts(req, res, next) {
        try {
            const search = req.query?.search || "";
            let products;
            if (search) {
                products = await ProductModel.find({
                    $text: { $search: new RegExp(search, "ig") },
                });
            } else {
                products = await ProductModel.find({});
            }
            res.status(StatusCodes.OK).json({
                StatusCode: StatusCodes.OK,
                data: { products },
            });
        } catch (err) {
            next(err);
        }
    }
    async getOneProduct(req, res, next) {
        try {
            const { id } = req.params;
            const product = await this.findProduct(id);
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                data: { product },
            });
        } catch (err) {
            next(err);
        }
    }

    async findProduct(id) {
        const product = await ProductModel.findById({ id });
        if (!product)
            throw new createHttpError.NotFound(
                "product woith this id not found"
            );
        return product;
    }
}

module.exports = {
    ProductController: new ProductController(),
};
