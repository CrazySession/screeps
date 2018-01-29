var roleBuilder = {
    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.carry.energy == creep.carryCapacity){
            creep.memory.full = true
        }
        if(creep.carry.energy == 0){
            creep.memory.full = false
        }

        if(creep.memory.full == true) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) =>
                (structure.structureType == STRUCTURE_EXTENSION ||
                structure.structureType == STRUCTURE_SPAWN ||
                structure.structureType == STRUCTURE_CONTAINER && structure.energy < structure.energyCapacity || _.sum(structure.store) != 0)

        });
            if(targets.length > 0) {
                if(creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }

    }};

module.exports = roleBuilder;