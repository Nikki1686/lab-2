'use strict';

//Setup Flying Vehicle
const SeaCreature = function(name, claws) {
    this.name = name;
    this.claws = claws;
};

SeaCreature.prototype.swims = () => {
    return 'Just keep swimming';
};

SeaCreature.prototype.sharkbait = () => {
    return 'I just became sharkbait';
};

//Airplane Constructor
const Fish = function(name) {
    SeaCreature.call(this, name, 0);
};

Fish.prototype = new SeaCreature();

//Helicopter
const Lobster = function(name) {
    SeaCreature.call(this, name, 2);
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.snip = () => {
    return 'I eat sharks for dinner';
};

module.exports = {Fish, Lobster};