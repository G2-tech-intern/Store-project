const path = require("path");
function ListOfImagesFromRequest(files, fileUploadPath) {
    if (files?.length > 0) {
        return files
            .map((file) => path.join(fileUploadPath, file.filename))
            .map((item) => item.split("\\").join("/"));
    } else {
        return [];
    }
}

function copyObject(object) {
    return JSON.parse(JSON.stringify(object));
}

module.exports = {
    ListOfImagesFromRequest,
    copyObject,
};