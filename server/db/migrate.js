// This script migrates the postgres file "users" 
// Hip to be Square Capstone Project.
// Author:  Pam Belknap

const connection = require("./connection");
connection.sequelize.sync({ force: true }).then(() => {
    console.log("migrated");
    process.exit();
});