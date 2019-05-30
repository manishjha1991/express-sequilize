const Sequelize = require('sequelize');
const UserModel = require('../models/userModel');
const config = require('./config.json')[process.env.NODE_ENV];



// 'database', 'username', 'password'
const sequelize = new Sequelize(config['DATABASE_NAME'], config['DATABASE_USER_NAME'], config['DATABASE_PASSWORD'], {
    host: config["DATABASE_HOST"],
    dialect: config["DATABASE_DIALECT"],
    pool:config["DATABASE_POOL_PROPERTIES"]
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
const User = UserModel(sequelize, Sequelize);



module.exports = {
    User

};