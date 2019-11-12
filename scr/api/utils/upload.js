const multer = require("multer")
const storage = multer.diskStorage({
    destination:"./public/upload",
    filename:(req,file,cd)=>{
        cd(null,file.fieldname + "-" +
        Date.now() +file.originalname
        )}
})
const upload = multer({storage}).single("profile")

exports.upload = {upload}