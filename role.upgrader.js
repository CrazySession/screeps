/*
* Standard upgrader for controller
* */
var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy == creep.carryCapacity){
            creep.memory.full = true
        }
        if(creep.carry.energy == 0){
            creep.memory.full = false
        }
        if(creep.memory.full == false) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if(creep.memory.full == true){
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }}
        }
	}
};

module.exports = roleUpgrader;