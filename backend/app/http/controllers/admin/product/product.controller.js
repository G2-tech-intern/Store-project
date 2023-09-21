const Controller = require("../../controller");
const {
    addProductSchema,
} = require("../../../validators/admin/product.schema");
const { ProductModel } = require("../../../../models/product.model");
const path = require("path");
const createHttpError = require("http-errors");
const { StatusCodes: StatusCodes } = require("http-status-codes");
const {
    ListOfImagesFromRequest,
    copyObject,
} = require("../../../../utils/functions");
const { MongoIDPattern } = require("../../../../utils/constant");

class ProductController extends Controller {
    async addProduct(req, res, next) {
        try {
            const images = ListOfImagesFromRequest(
                req?.files || [],
                req.body.fileUploadPath
            );
            const productBody = await addProductSchema.validateAsync(req.body);
            const { title, desc, count, price } = productBody;
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
            next(err);
        }
    }
    async editProduct(req, res, next) {
        try {
            const { id } = req.params;
            const product = await this.findProduct(id);
            const data = copyObject(req.body);
            data.images = ListOfImagesFromRequest(
                req?.files || [],
                req.body.fileUploadPath
            );
            Object.keys(data).forEach((key) => {
                if (!Object.values(key)) {
                    delete Object.keys(key);
                }
                if (Array.isArray(data[key]) && data[key].length == 0)
                    delete data[key];
            });
            const updateResult = await ProductModel.updateOne(
                { _id: product._id },
                { $set: data }
            );
            if (updateResult.modifiedCount == 0) {
                throw createHttpError.InternalServerError(
                    "product update failed"
                );
            }
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "product updated",
            });
        } catch (err) {
            next(err);
        }
    }
    async removeProduct(req, res, next) {
        try {
            const { id } = req.params;
            const product = await this.findProduct(id);
            const deleteResult = await ProductModel.deleteOne({
                _id: product.id,
            });
            if (deleteResult.deletedCount == 0) {
                throw new createHttpError.InternalServerError("delete failed");
            }
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "product delete successfully",
            });
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
        const product = await ProductModel.findById(id);
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
