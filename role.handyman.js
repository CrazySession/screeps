var roleHandyman = {

    /** @param {Creep} creep **/

    run: function(creep) {

        if(creep.carry.energy == creep.carryCapacity){
            creep.memory.full = true
        }
        if(creep.carry.energy == 0){
            creep.memory.full = false
        }
        
        /*if(creep.room.controller) {
            if(creep.signController(creep.room.controller, "Private Property! No trespassing!Except you bring coffee ;-)") == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }*/
        
        //harvesting from source
        if(creep.memory.full == false) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }else{
            targets = creep.room.find(FIND_STRUCTURES, {
                filter: object => object.hits < object.hitsMax});

            targets.sort((a,b) => a.hits - b.hits);

            if(targets.length > 0) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }

}};
module.exports = roleHandyman;