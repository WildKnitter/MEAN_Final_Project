// This is a controller to populate the league data for the 
// Hip to be Square Capstone Project.
// Author:  Pam Belknap

var leagueService = require('../services/leagueService');

var leagueController = {};

// GET: http://localhost:3000/leagues/data
leagueController.getLeaguesData = (req, res) => {
    leagueService.list(req, res);
};

module.exports = leagueController;