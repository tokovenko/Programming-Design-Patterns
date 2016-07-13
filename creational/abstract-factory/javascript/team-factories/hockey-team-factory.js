var HockeyTeam = require('./../teams/hockey-team');

var factory = (function() {

    function HockeyTeamFactory() {}

    HockeyTeamFactory.create = function(name) {
        return new HockeyTeam(name);
    };

    return HockeyTeamFactory;
}());

module.exports = factory;
