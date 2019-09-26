// This is a controller for any user-related pages and data
// Pages:  Login Page, Admin Page, Register Page, and Edit Users Profile Page.
// GET users for the Admin Page
// POST users for Login Page
// POST users for Register Page
// PUT users for Edit Users Profile Page
// DELETE users for Edit Users Profile Page
// LOGOUT function

// Hip to be Square Capstone Project.
// Author:  Pam Belknap

var userService = require('../services/userService');
var usersController = {};

/* GET Users. */
// GET http://localhost:3000/users/
usersController.getUsersAdminData = (req, res) => {
    userService.list()
        .then((users) => {
            if (users) {
                res.json(users);
            } else {
                res.end('No Users found.');
            }
        })
        .catch((err) => {
            console.log(`Listing Users error: ${err}`);
            res.end('Listing Users error.');
        });
};

/* POST for Login. */
// POST http://localhost:3000/users/login
usersController.postUsersLogin = (req, res) => {
    userService.login({
            username: req.body.username,
            password: req.body.password
        })
        .then((user) => {
            if (user) {
                req.session.id = req.params.id;
                console.log("***ID =");
                console.log(req.session.id);
                req.session.username = req.body.username;
                console.log("***USERNAME =");
                console.log(req.session.username);
                req.session.is_admin = user.is_admin;
                console.log("***IS_ADMIN =");
                console.log(req.session.is_admin);
                res.json(user);
            } else {
                res.json('[]');
            }
        })
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.end('Reading User error.');
        });
};

/* POST for Register. */
// POST http://localhost:3000/users/register
usersController.postUsersRegister = (req, res) => {
    userService.register({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.json('[]');
            }
        })
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.end('Creating User error.');
        });
};

/* PUT users editing user. */
// PUT http://localhost:3000/users/edituserprofile/:id
usersController.putUsersEditing = (req, res) => {
    console.log(req.params.id);
    userService.update({
            id: req.params.id,
            email: req.body.email
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Updating User error: ${err}`);
            res.end('Updating User error.');
        });
};

/* DELETE user */
// DELETE http://localhost:3000/users/edituserprofile/:id
usersController.deleteUsers = (req, res) => {
    userService.delete(req.params.id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Deleting User error: ${err}`);
            res.end('Deleting User error.');
        });
};

/* USERS LOGOUT */
usersController.getUsersLogout = (req, res) => {
    req.session.username = null;
    res.redirect('/');
};

module.exports = usersController;