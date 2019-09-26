// This is a service to get users data. 
// Hip to be Square Capstone Project.
// Author:  Pam Belknap

const users = require("../db/connection").users;

// The Service uses the Sequelize ORM for DB CRUD operations
// and returns results to the calling Controller

var userService = {};

userService.list = () => {
    return users.findAll({ where: { is_admin: "0" } })
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

userService.login = (userObj) => {
    return users.findOne({
            where: userObj
        })
        .then(user => {
            return user;
            console.log("user in user service then = " + user);
        })
        .catch(error => {
            throw error;
            console.log("user in user service catch = " + user);
        })
};

userService.register = (userObj) => {
    return users
        .create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.update = (userObj) => {
    console.log(userObj);
    return users.update({ email: userObj.email }, { where: { ID: userObj.id } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.delete = (id) => {
    return users.destroy({ where: { ID: id } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        });
};

module.exports = userService;