const { db} = require("../db/connection")
const { Sequelize, Model } = require("sequelize") ;

class UserModel extends Model {}
UserModel.init({
        username: Sequelize.STRING,
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
        profileImg:Sequelize.STRING,
    }, { sequelize: db, modelName: "users" });

UserModel.sync({alter: true}).then( () => {
    console.log("User Table created.");
}).catch( (err) => {
    console.log(err);
});
module.exports.UserModel = UserModel