var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleReagan = require('role.Reagan');
var roleHandyman = require('role.handyman');
var spawning = require('spawning');
var roleSourceTransp = require('role.sourceTransp');
var roleHarvesterTwo = require('role.harvesterTwo');

module.exports.loop = function () {

    var num = 0;

    //Clear memory from outdated data
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    //spawning
    spawning.run();

    // work loop
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }

        if(creep.memory.role == 'harvesterTwo') {
            roleHarvesterTwo.run(creep);
        }

        if(creep.memory.role == 'sourceTransp'){
            roleSourceTransp.run(creep,num);
            if(num == 0){
                num = 1;
            }else{
                num = 0;
            }
        }

        if(creep.memory.role == 'handyman') {
            roleHandyman.run(creep);
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