var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep,sourceNum) {
        //harvesting from source
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[sourceNum]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceNum]);
            }
        }
        //transfering energy to spawn
        else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
	}
};

module.exports = roleHarvester;