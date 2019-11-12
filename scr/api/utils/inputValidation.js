const  Joi= require("@hapi/joi") 
 
    
    
 module.exports = regvalidat = (req,res,next)=>{
    const schema = Joi.object().keys({
       firstname: Joi.string().min(3).max(30),
       lastname: Joi.string().min(3).max(30),
        email: Joi.string().min(3).max(30),
        age: Joi.integer().min(3).max(30),
        location: Joi.string().min(3).max(30),
        phone: Joi.integer().min(3).max(30),
        skill: Joi.string().min(3).max(30),
    });
    const { firstname, lastname,email,password, age,location,phone,skill } = req.body
    Joi.validate({ firstname,lastname,email,password, age,location,phone,skill 
            },schema, (error,value)=>{
           if(error){
             console.error(error)
             res.send(`there was an error:`+JSON.stringify(error))
           }
           return (value)
       });
      next()
    }
   