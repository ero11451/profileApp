const { db} = require("../db/connection")
const { Sequelize, Model } = require("sequelize") ;

class imageModel extends Model {}
imageModel.init({
        username: Sequelize.STRING,
        fieldname: Sequelize.STRING,
        originalname: Sequelize.STRING,
        destination: Sequelize.STRING,
        filename: Sequelize.STRING,
        path: Sequelize.STRING,
    }, { sequelize: db, modelName: "users" });

imageModel.sync({alter: true}).then( () => {
    console.log("User Table created.");
}).catch( (err) => {
    console.log(err);
});
module.exports.imageModel = imageModel