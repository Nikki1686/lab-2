'use strict';

//Setup Flying Vehicle
const FlyingVehicle = function(name, wings) {
    this.name = name;
    this.wings = wings;
};

FlyingVehicle.prototype.fly = () => {
    return 'We are flying';
};

FlyingVehicle.prototype.stop = () => {
    return 'We have reached our destination';
};

//Airplane Constructor
const Airplane = function(name) {
    FlyingVehicle.call(this, name, 5);
};

Airplane.prototype = new FlyingVehicle();

//Helicopter

module.exports = {Airplane};