var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleReagan = require('role.Reagan');

module.exports.loop = function () {
    console.log(Game.spawns.Spawn1.room);
    //Variables
    var sourceNum = 0;

    //Clear memory from outdated data
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    // count creeps --- depending their role
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');


    // create harvester & upgrader if the numbers are below x
	//TODO add Energy requirement to the create if/else if
	if(harvesters.length < 2) {			// only relevant for start so you will get 2 harvesters for your spawn and not instant upgraders
	var newName = 'Harvester' + Game.time;
	console.log('Spawning new harvester: ' + newName);
	Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
		{memory: {role: 'harvester',full: 'false'}});
    }
    else if(upgraders.length < 6) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'upgrader' ,full: 'false'}});
    }

    else if(builder.length < 3){
        var newName = 'builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName,
            {memory: {role: 'builder',full: 'false'}});
    }

    else if(harvesters.length < 5) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'harvester',full: 'false'}});
    }

    // work loop
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep,sourceNum);
            //Splitting creeps on different sources
            if(sourceNum == 0){
                sourceNum = 1;
            }else{
                sourceNum = 0;
            }
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'reagan'){
            roleReagan.run(creep);
        }
    }
}