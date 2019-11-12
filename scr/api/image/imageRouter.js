const express  = require("express")
const router = express.Router()
const multer  = require("multer")
// const imageController = require("./imageController")
const imageModel = require("./imageModel")
const storage = multer.diskStorage({
    destination:"./public/upload",
    filename:(req,file,cd)=>{
        cd(null,file.fieldname + "-" +
        Date.now() +file.originalname
        )}
})
const upload = multer({storage}).single("profile")

router.post('/profile', (req, res) => 
    upload(req,res,(err)=>{
        if(err)
           {res.send(err)
        }else{

        
        const img= req.file
         imageModel.create({
            fieldname:img.fieldname,
            filename:img.filename,
            originalname:img.originalname,
            destination:img.destination,
            filename:img.fieldname,
            path:img.path,
        }).then((image) => {
            res.send(image);
        }).catch((err) => {
            res.send(err);
        });
    }
    })

);
module.exports = imageRouter = router