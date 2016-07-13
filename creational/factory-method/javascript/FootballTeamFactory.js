var Goalkeeper = require('./team/Goalkeeper');
var Defender = require('./team/Defender');
var Midfielder = require('./team/Midfielder');
var Forward = require('./team/Forward');

var factory = (function() {

    function FootballTeamFactory() {}

    FootballTeamFactory.prototype.createGoalkeeper = function(name) {
        return new Goalkeeper(name);
    }

    FootballTeamFactory.prototype.createDefender = function(name) {
        return new Defender(name);
    }

    FootballTeamFactory.prototype.createMidfielder = function(name) {
        return new Midfielder(name);
    }

    FootballTeamFactory.prototype.createForward = function(name) {
        return new Forward(name);
    }

    return FootballTeamFactory;

}());

module.exports = factory;
