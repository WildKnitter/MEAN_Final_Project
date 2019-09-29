// This is a controller to render the Teams Page, and
// populate the team data for the 
// Hip to be Square Capstone Project.
// Author:  Pam Belknap

var teamsService = require('../services/teamsService');

var teamsController = {};

// GET: http://localhost:3000/teams/data
teamsController.getTeamsData = (req, res) => {
    teamsService.listTeamsData(req, res);
};

/* GET Team Data by Team Id */
// GET http://localhost:3000/teams/data/:id 
teamsController.getTeamDataById = (req, res) => {
    teamsService.listTeamDataById(req, res);
};

// GET: http://localhost:3000/teams/data/byleague/:id
teamsController.getTeamsDataByLeague = (req, res) => {
    teamsService.listTeamsDataByLeague(req, res);
};

// GET http://localhost:3000/teams/data/byteamtype/:id
teamsController.getTeamsDataByTeamType = (req, res) => {
    teamsService.listTeamsDataByTeamType(req, res);
};

/* DELETE a Team */
// DELETE http://localhost:3000/teams/data/:id 
teamsController.deleteTeamById = (req, res) => {
    teamsService.deleteTeam(req, res);
};

module.exports = teamsController;