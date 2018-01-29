var roleLDistHarv = {

    /** @param {Creep} creep **/
    run: function(creep,sourceNum) {
        //harvesting from source
        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[sourceNum]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[sourceNum]);
            }
        }
};

module.exports = roleLDistHarv;