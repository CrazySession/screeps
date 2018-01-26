/*
* harvester for sources in other rooms
* */
var roleReagan = {

    /** @param {Creep} creep **/
    run: function(creep,curRoomName) {
        //harvesting from source
        if(creep.carry.energy < creep.carryCapacity) {

            var position = creep.pos;
            var roomToTheRight = [];
            var roomLength = curRoomName.length;

            for(i=0;i<roomLength;i++){
                if(i==2){
                    var a = Number(curRoomName[i]);
                    var b = a+1;
                    roomToTheRight.push(b);
                }else{
                    roomToTheRight.push(curRoomName[i]);
                }
            }

            if(Game.spawns.Spawn1.room == curRoomName) {
                findExitTo(roomToTheRight);
            }else {

                // finding source in current room
                var sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
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

module.exports = roleReagan;