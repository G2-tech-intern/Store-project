const Controller = require("../../controller");
const {
    addProductSchema,
} = require("../../../validators/admin/product.schema");
const { ProductModel } = require("../../../../models/product.model");
const path = require("path");
const createHttpError = require("http-errors");
const { StatusCodes: StatusCodes } = require("http-status-codes");
const { ListOfImagesFromRequest } = require("../../../../utils/functions");
const {MongoIDPattern} = require('../../../../utils/constant');

class ProductController extends Controller {
    async addProduct(req, res, next) {
        try {
            const images = ListOfImagesFromRequest(
                req?.files || [],
                req.body.fileUploadPath
            );
            const productBody = await addProductSchema.validateAsync(req.body);
            const {
                title,
                desc,
                count,
                price,
            } = productBody;
            const supplier = req?.user?._id || "nima";


            const product = await ProductModel.create({
                title,
                desc,
                count,
                price,
                images,
                supplier,
            });

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "product created",
                data: {
                    product,
                },
            });
        } catch (err) {
            console.log(err);
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
            const { id } = req.params;
            console.log(RegExp().test(MongoIDPattern , id));
            const product = await this.findProduct(id);
            console.log("up to here");
            const deleteResult = await ProductModel.deleteOne({
                _id: product.id,
            });
            console.log(deleteResult);
            if (deleteResult.deletedCount == 0) {
                throw new createHttpError.InternalServerError("delete failed");
            }
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "product delete successfully",
            });
        } catch (err) {
            console.log(err);
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
        console.log({id});
        const product = await ProductModel.findById(id);
        console.log(product);
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
