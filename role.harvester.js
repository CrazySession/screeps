/*
* Standard harvester for source
* */
var roleHarvester = {
//#TODO harverster not storing in extensions
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
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                structure.structureType == STRUCTURE_SPAWN ||
                structure.structureType == STRUCTURE_TOWER ||
                structure.structureType == STRUCTURE_CONTAINER) && structure.energy < structure.energyCapacity;
            }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleHarvester;