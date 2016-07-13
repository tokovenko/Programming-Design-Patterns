var FootballTeam = require('./../teams/football-team');

var factory = (function() {

    function FootballTeamFactory() {}

    FootballTeamFactory.create = function(name) {
        return new FootballTeam(name);
    };

    return FootballTeamFactory;
}());

module.exports = factory;
