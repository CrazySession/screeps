/*
* harvester for sources in other rooms
* */
var roleReagan = {

    /** @param {Creep} creep **/
    run: function(creep) {
        //harvesting from source
        if(creep.carry.energy < creep.carryCapacity) {
            var position = creep.pos;
            creep.moveTo(FIND_EXIT_RIGHT);
            /*if(creep.pos.x == 49){
                creep.move(RIGHT);
            }*/
            //var sources = creep.room.find(FIND_SOURCES);
            //if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            //    creep.moveTo(sources[0]);
            //}
        }
        //transfering energy to spawn
        else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
    }
};

module.exports = roleReagan;