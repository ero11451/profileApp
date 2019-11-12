const UserController = require("./userController") 
const regvalidat  = require('../utils/inputValidation')
const express = require("express") 
const router = express.Router()
const user = UserController
router.post("/profile",regvalidat,  async (req,res)=>{
  const {firstname, lastname,email,age,location,phone,skill } = req.body
  const userReg = await user.update(firstname, lastname,email,password, age,location,phone,skill)
  res.send(JSON.stringify(userReg))
})

router.post("/login",async(req,res)=>{
    const {email } = req.body
    const userfinde = await user.findUser(email)
    if (!userfinde){res.redirect("/")}
    req.userfinde 
    res.redirect("/home");
})

router.get("/",(req,res)=>{
    res.send("there is a reason for all your problem should i tell you (money!!)")
})

module.exports = userRouter = router 
