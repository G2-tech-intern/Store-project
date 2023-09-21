const { ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = require("./constant");
const { UserModel } = require("../models/users");
const createError = require("http-errors");
const JWT = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

function RandomNumberGenerator(){
    return Math.floor((Math.random() * 90000) + 10000)
}
function SignAccessToken(userID){
    return new Promise(async (resolve , reject) => {
        const user = await UserModel.findById(userID)
        const payload = {
            mobile : user.mobile
        }
        const options = {
            expiresIn : "20d"
        }
        JWT.sign(payload , ACCESS_TOKEN_SECRET_KEY , options ,async (err , token) => {
            if(err) reject(createError.InternalServerError("Internal server error"));
            await UserModel.updateOne({_id : userID}, {$set: {token}});
            resolve(token)
        })
    });
  
}
function deleteFilePublic(fileAddress) {
    if (!Array.isArray(fileAddress) && fileAddress?.length > 0) {
        const pathFile = path.join(__dirname, "..", "..", "public", fileAddress)
        if (fs.existsSync(pathFile)) fs.unlinkSync(pathFile)
    }else if(Array.isArray(fileAddress) && fileAddress.length > 0){
       for (const image of fileAddress) {
        const pathFile = path.join(__dirname, "..", "..", "public", image)
        if (fs.existsSync(pathFile)) fs.unlinkSync(pathFile)
       }
    }else if(fileAddress == null || undefined || "" || [""]){
        return "Not found"
    }

}
function ListOfImagesFromRequest(files, fileUploadPath) {
    if (files?.length > 0) {
        return ((files.map(file => path.join(fileUploadPath, file.filename))).map(item => item.replace(/\\/g, "/")))
    } else {
        return []
    }
}
function copyObject(object){
    return JSON.parse(JSON.stringify(object))
}

function deleteInvalidPropertyInObject(data = {}, blackListFields = []){
    let nullishData = ["", " ", "0", 0, null, undefined]
    Object.keys(data).forEach(key => {
        if(blackListFields.includes(key)) delete data[key]
        if(typeof data[key] == "string") data[key] = data[key].trim();
        if(Array.isArray(data[key]) && data[key].length > 0 ) data[key] = data[key].map(item => item.trim()) 
        if(Array.isArray(data[key]) && data[key].length == 0 ) delete data[key]
        if(nullishData.includes(data[key])) delete data[key];
    });
    
}

function removeFieldEmpty(array) {
    for (const obj of array) {
        for (let key in obj) {
            if (obj[key] === null || obj[key].length === 0 || obj[key] === undefined || obj[key] === '') {
              delete obj[key];
            }
        }
    }
    return array
}
module.exports = {
    deleteInvalidPropertyInObject,
    ListOfImagesFromRequest,
    RandomNumberGenerator,
    verifyRefreshToken,
    removeFieldEmpty,
    SignRefreshToken,
    deleteFilePublic,
    SignAccessToken,
    copyObject,
}