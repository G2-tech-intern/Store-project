const { default: mongoose } = require("mongoose");
const UserSchema = new mongoose.Schema({
    first_name : {type : String},
    last_name : {type : String},
    username : {type : String, lowercase : true},
    mobile : {type : String, required : true, unique: true},
    email : {type : String, lowercase : true},
    token : {type : String, default: ""},
    otp : {type : Object, default : {
        code : 0,
        expiresIn : 0
    }},
}, {
    timestamps : true,
    toJSON : {
        virtuals : true
    }
});
UserSchema.index({mobile : "text", last_name : "text", username : "text", first_name : "text", email : "text"})
module.exports = {
    UserModel : mongoose.model("user", UserSchema) 
}