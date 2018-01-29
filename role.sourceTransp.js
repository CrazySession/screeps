var sourceTransp = {

    /** @param {Creep} creep **/
    run: function(creep,num) {
        if(num == 1){
            creep.moveTo(Game.flags.Source2,{visualizePathStyle: {stroke: '#ffffff'}});
        }

        if(creep.carry.energy < creep.carryCapacity) {
            var target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if(target) {
                if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                structure.structureType == STRUCTURE_SPAWN ||
                structure.structureType == STRUCTURE_TOWER ||
                structure.structureType == STRUCTURE_CONTAINER) && structure.energy < structure.energyCapacity
                || _.sum(structure.store) < structure.storeCapacity;
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

module.exports = sourceTransp;