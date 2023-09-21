const Joi = require("@hapi/joi");
const createError = require("http-errors");

const updateProfileUserSchema = Joi.object({
    first_name: Joi.string().min(3).max(30).error(createError.BadRequest("The first name is not correct")),
    last_name: Joi.string().min(3).max(30).error(createError.BadRequest("The last name is not correct")),
    username: Joi.string().lowercase().min(3).max(30).error(createError.BadRequest("The username is not correct")),
    email: Joi.string().email().error(createError.BadRequest("The email is not correct"))
});

module.exports = {
    updateProfileUserSchema
};
