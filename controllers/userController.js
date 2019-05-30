const { User} = require('../utils/sequelize');
const {UserQuery}= require("../lib/userQuery")
module.exports.CreateUser = async function (userInformation) {
    const user = UserQuery(userInformation);
    return  await User.create ( user );
};