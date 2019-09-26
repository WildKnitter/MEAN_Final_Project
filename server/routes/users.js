// This is a route for any user-related pages and data
// Pages:  Login Page, Admin Page, Register Page, and Edit Users Profile Page.
// GET users for the Admin Page
// POST users for Login Page
// POST users for Register Page
// PUT users for Edit Users Profile Page
// DELETE users for Edit Users Profile Page
// LOGOUT function

// Hip to be Square Capstone Project.
// Author:  Pam Belknap

var express = require('express');
const controller = require('../controllers/controllerUsers');
var router = express.Router();

/* GET users listing for non-admins. */
// GET: http://localhost:3000/users/
router.get('/', controller.getUsersAdminData);

/* POST for Login. */
// POST http://localhost:3000/users/login
router.post('/login', controller.postUsersLogin);

/* POST for Register. */
// POST http://localhost:3000/users/register
router.post('/register', controller.postUsersRegister);

/* PUT users for editing user. */
// PUT http://localhost:3000/users/edituserprofile/:ID
router.put('/edituserprofile/:id', controller.putUsersEditing);

/* DELETE user. */
// DELETE http://localhost:3000/users/edituserprofile/:ID
router.delete('/edituserprofile/:id', controller.deleteUsers);

/* Logout routine */
router.get('/logout', controller.getUsersLogout);

module.exports = router;