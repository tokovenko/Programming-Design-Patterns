var Team = (function() {
    function HockeyTeam(name) {
        this.name = name;
        this.players = 6;
    }

    return HockeyTeam;
}());

module.exports = Team;
