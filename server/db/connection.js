// This script establishes the connection for the postgres file users 
// Hip to be Square Capstone Project.
// Author:  Pam Belknap

const Sequelize = require("sequelize");

const sequelize = new Sequelize("hca", "hca", "password", {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
});

const users = sequelize.import("../models/users");

sequelize.authenticate().then(() => {
    console.log("connected");
});

module.exports = {
    Sequelize,
    sequelize,
    users
};