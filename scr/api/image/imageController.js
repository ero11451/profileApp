const imageModel = require("./imageModel")
exports = class imageContoller {
    createImage({fieldname,originalname,encodeing,destination,filename,path,})
    {
        return imageModel.create(fieldname,originalname,encodeing,destination,filename,path,)
        }
}