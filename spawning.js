var spawning = {
    run: function(){
        // count creeps --- depending their role
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var reagan = _.filter(Game.creeps, (creep) => creep.memory.role == 'reagan');
        var handyman = _.filter(Game.creeps, (creep) => creep.memory.role == 'handyman');
        var harvesterTwo = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterTwo');
        var sourceTransp = _.filter(Game.creeps, (creep) => creep.memory.role == 'sourceTransp');


        // create harvester & upgrader if the numbers are below x
        //TODO add Energy requirement to the create if/else if
        //TODO balance spawn numbers ! and add Reagan into spawn routine
        /*if(harvesters.length < 1) {			// only relevant for start so you will get 2 harvesters for your spawn and not instant upgraders
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'harvester',full: 'false'}});
        }*/
        if(harvesters.length < 1) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,MOVE], newName,
                {memory: {role: 'harvester',full: 'false'}});
        }

        else if(harvesterTwo.length < 1) {
            var newName = 'HarvesterTwo' + Game.time;
            console.log('Spawning new harvesterTwo: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,MOVE], newName,
                {memory: {role: 'harvesterTwo',full: 'false'}});
        }

        else if(sourceTransp.length < 6){
            var newName = 'sourceTransp' + Game.time;
            console.log('Spawning new sTrans: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'sourceTransp',full: 'false'}});

        if(upgraders.length < 1) {
            var newName = 'Upgrader' + Game.time;
            console.log('Spawning new upgrader: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'upgrader' ,full: 'false'}});
        }

        else if(builder.length < 2){
            var newName = 'builder' + Game.time;
            console.log('Spawning new builder: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE], newName,
                {memory: {role: 'builder',full: 'false'}});
        }

        else if(reagan.length < 2){
            var newName = 'reagan' + Game.time;
            console.log('Spawning new reagan: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'reagan',full: 'false'}});
        }

        else if(handyman.length < 2){
            var newName = 'handyman' + Game.time;
            console.log('Spawning new handyman: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE], newName,
                {memory: {role: 'handyman',full: 'false'}});
        }
    }
}};
module.exports = spawning;