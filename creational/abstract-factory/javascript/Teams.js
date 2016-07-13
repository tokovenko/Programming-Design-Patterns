var FootballTeamFactory = require('./team-factories/football-team-factory');
var HockeyTeamFactory = require('./team-factories/hockey-team-factory');
var VolleyballTeamFactory = require('./team-factories/volleyball-team-factory');

var teams = {};

teams.create = function(type, name) {
    switch (type) {
        case 'football':
            return FootballTeamFactory.create(name);
            break;
        case 'hockey':
            return HockeyTeamFactory.create(name);
            break;
        case 'volleyball':
            return VolleyballTeamFactory.create(name);
            break;
        default:

    }
    return null;
};


module.exports = teams;
