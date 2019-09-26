// This is a service to get leagues data. 
// Hip to be Square Capstone Project.
// Author:  Pam Belknap

let fs = require("fs");
var leagueService = {};

leagueService.list = (req, res) => {
    // try to read data, send, else send empty array
    try {
        res.end(fs.readFileSync(`./data/leagues.json`));
    } catch (err) {
        res.end('[]');
    }
};

module.exports = leagueService;