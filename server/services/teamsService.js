// This is a service to get teams data. 
// Hip to be Square Capstone Project.
// Author:  Pam Belknap

let fs = require("fs");
var teamsService = {};

// read TEAM DATA
teamsService.listTeamsData = (req, res) => {
    // try to read data, send, else send empty array
    try {
        res.end(fs.readFileSync(`./data/teams.json`));
    } catch (err) {
        res.end('[]');
    }
};

// read TEAM DATA BY ID
teamsService.listTeamDataById = (req, res) => {
    // try to read data, send, else send empty array
    let id = req.params.id;
    console.log("Received a GET request for team " + id);

    let data = fs.readFileSync(`./data/teams.json`);
    data = JSON.parse(data);

    let match = getMatchingTeamById(id, data)
    if (match == null) {
        res.status(404).send("Not Found");
        return;
    }

    //console.log("Returned data is: ");
    //logOneTeam(match);
    res.end(JSON.stringify(match));
};

function getMatchingTeamById(id, data) {
    let match = data.find(t => t.TeamId == id);
    return match;
}

// read TEAM DATA BY LEAGUE
function getMatchingTeamsByLeague(leagueCode, data) {
    let matches = data.filter(t => t.League == leagueCode);
    return matches;
}

teamsService.listTeamsDataByLeague = (req, res) => {

    let id = req.params.id;
    console.log("Received a GET request for teams in league " + id);

    let data = fs.readFileSync(`./data/teams.json`, "utf8");
    data = JSON.parse(data);

    // find the matching teams for 
    let matches = getMatchingTeamsByLeague(id, data);

    //console.log("Returned data is: ");
    //logArrayOfTeams(matches);
    res.end(JSON.stringify(matches));
};

// DELETE A TEAM
teamsService.deleteTeam = (req, res) => {
    let id = req.params.id;
    console.log("Received a DELETE request for team " + id);

    let data = fs.readFileSync(`./data/teams.json`, "utf8");
    data = JSON.parse(data);

    // find the index number of the team in the array
    let foundAt = data.findIndex(t => t.TeamId == id);

    // delete the team if found
    if (foundAt != -1) {
        match = data.splice(foundAt, 1);
    }

    fs.writeFileSync(`./data/teams.json`, JSON.stringify(data));

    console.log("Team deleted!");
    //logOneTeam(match);
    // Note:  even if we didn't find them, send a 200 because they are gone
    res.status(200).send();
};

module.exports = teamsService;