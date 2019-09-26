// This is a route to direct to the teams page and the teams data. 
// Hip to be Square Capstone Project.
// Author:  Pam Belknap

var express = require('express');
const controller = require('../controllers/controllerTeams');
var router = express.Router();

/* GET Teams data. */
// GET http://localhost:3000/teams/data
router.get('/data', controller.getTeamsData);

/* GET teams data by team id. */
// GET http://localhost:3000/teams/data/:id 
router.get("/data/:id", controller.getTeamDataById);

/* GET Teams data by league. */
// GET http://localhost:3000/teams/data/byleague/:id
router.get('/data/byleague/:id', controller.getTeamsDataByLeague);

// DELETE A TEAM
// DELETE http://localhost:3000/teams/data/:id 
router.delete("/data/:id", controller.deleteTeamById);

module.exports = router;