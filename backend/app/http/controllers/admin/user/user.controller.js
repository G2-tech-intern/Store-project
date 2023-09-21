const { deleteInvalidPropertyInObject, copyObject } = require("../../../../utils/function");
const {StatusCodes : HttpStatus} = require("http-status-codes");
const { UserModel } = require("../../../../models/user.model");
const Controller = require("../../controller");
const createHttpError = require("http-errors");
const { updateProfileUserSchema } = require("../../../validators/admin/user.schema");

let BlackList = {
    MOBILE : "mobile",
    COURSES : "Courses",
    OTP : "otp",
    ROLES : "Roles",
    BILLS : "bills",
    DISCOUNT : "discount"
}
Object.freeze(BlackList)
class UserController extends Controller{
    async getAllUsers (req , res , next) {
        try {
            const {search} = req.query;
            let users;
            if(search) users = await UserModel.find({$text : {$search : search}} , {
                    first_name : 1 
                    , last_name : 1 
                    , username : 1 
                    , mobile : 1 
                    , email : 1
            });
            else users = await UserModel.find({} , {
                first_name : 1 
                , last_name : 1 
                , username : 1 
                , mobile : 1 
                , email : 1
            })
            return res.status(HttpStatus.OK).json({
                StatusCode : HttpStatus.OK,
                data : {
                    users
                }
            })
            
        } catch (error) {
            next(error)
        }
    }
    async updateUserProfile (req,res,next) {
        try {
            const userID = req.user._id;
            const userBody = await updateProfileUserSchema.validateAsync(req.body);
            const blackListFields = Object.values(BlackList)
            deleteInvalidPropertyInObject(userBody , blackListFields)
            const updateUserResults = await UserModel.updateOne({_id : userID} , {$set : userBody})
            if(updateUserResults.modifiedCount == 0) 
                throw createHttpError.InternalServerError("Updated Profile Failed")
            return res.status(HttpStatus.OK).json({
                StatusCode : HttpStatus.OK,
                data : {
                    message : 'Profile updated successfully'
                }
            })
        } catch (error) {
            next(error)
        }
    }
    async userProfile(req, res, next){
        try {
            const user = req.user;
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: {
                    user
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    AdminUserController : new UserController()
}