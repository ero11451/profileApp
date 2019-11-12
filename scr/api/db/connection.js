const Sequelize = require('sequelize');

const dbconnection = new Sequelize('profiledb', 'muyi', 'fedgac11451', {
  host: 'localhost',
  dialect:'mysql' 
});
dbconnection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports.db = dbconnection