/*
* harvester for sources in other rooms
* */
var roleReagan = {

    /** @param {Creep} creep **/
    run: function(creep) {
        //harvesting from source
        var curRoomName = Game.spawns.Spawn1.room;
        curRoomName = curRoomName.toString();
        var roomToTheRight = [];
        if(creep.carry.energy < creep.carryCapacity) {
            //var roomLength = curRoomName.length;
            //console.log(curRoomName);

            for(i=0;i<curRoomName.length;i++){
                if(i==8){
                    var a = Number(curRoomName[i]);
                    var b = a+1;
                    roomToTheRight.push(b);
                }else{
                    roomToTheRight.push(curRoomName[i]);
                }
                //console.log(roomToTheRight.join(''));
            }

            var creepPos = creep.pos.toString();
            creepPos = creepPos.slice(1,11);
            curRoomName = curRoomName.slice(1,11);
            console.log(creepPos);
            console.log(curRoomName);
            if(creepPos == curRoomName) {
                exitDir = Game.map.findExit(creep.room, 'E32S15');
                posEx = creep.pos.findClosestByRange(exitDir);
                creep.moveTo(posEx);
            }else {
                // finding source in current room
                target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if(target) {
                    if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
            }
        }
        //transfering energy to spawn
        else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
            //#TODO add proper Pathfinding so creep finds way back if carryCapacity reached
            /*var targets = creep.room.find(FIND_STRUCTURES, {
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
            }*/
        }
    }
};

module.exports = roleReagan;