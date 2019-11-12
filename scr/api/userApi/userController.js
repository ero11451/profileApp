const UserModel = require('./userModel') 

class userController {
  updateUser(firstname,lastname,email,age,password,location,phone,skill ){
       UserModel.update({where:{ firstname,lastname,email,profileImage, password,age,location,phone,skill}})
       .catch((err) =>  console.log(err))
       .then((user) => user)
    }
   creatUser (email,password,firstname,lastname) {
        user = UserModel.create({firstname,lastname,password,email})
        .catch((err)=>{
            console.log(err)
        })
    }
    finduser (email){
        UserModel.findOne({where:{email}}).then((user) => user)
        .catch((err) => { throw new Error(err)});
    }
}

module.exports.userController = userController