var VolleyballTeam = require('./../teams/volleyball-team');

var factory = (function() {

    function VolleyballTeamFacory() {}

    VolleyballTeamFacory.create = function(name) {
        return new VolleyballTeam(name);
    };

    return VolleyballTeamFacory;
}());

module.exports = factory;
