// This is a route to direct to leagues data. 
// Hip to be Square Capstone Project.
// Author:  Pam Belknap

var express = require('express');
const controller = require('../controllers/controllerLeagues');
var router = express.Router();

/* GET leagues data. */
// GET http://localhost:3000/leagues/data
router.get('/data', controller.getLeaguesData);

module.exports = router;