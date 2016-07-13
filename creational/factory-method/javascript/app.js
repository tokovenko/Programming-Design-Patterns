var FootballTeamFactory = require('./FootballTeamFactory');


var factory = new FootballTeamFactory();

var goalkeeper = factory.createGoalkeeper('Michael Noer');
console.log(goalkeeper);

var defender = factory.createDefender('Sergio Ramos');
console.log(defender);

var midfielder = factory.createMidfielder('N\'Golo Kanté');
console.log(midfielder);

var forward = factory.createForward('Thierry Henry');
console.log(forward);
