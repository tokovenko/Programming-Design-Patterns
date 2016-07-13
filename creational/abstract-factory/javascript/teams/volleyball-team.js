var Team = (function() {
    function VolleyballTeam(name) {
        this.name = name;
        this.players = 6;
    }

    return VolleyballTeam;
}());

module.exports = Team;
