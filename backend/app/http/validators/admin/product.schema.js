const Joi = require("@hapi/joi");
const addProductSchema = Joi.object({
    title: Joi.string().min(3).max(30),
    desc: Joi.string(),
    price: Joi.number(),
    count: Joi.number(),

    fileName: Joi.string().pattern(/(\.png|\.jpg|\.webp|\.jpeg|\.gif)$/),
    fileUploadPath: Joi.allow(),
});

module.exports = {
    addProductSchema,
};
