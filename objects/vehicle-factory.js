'use strict';
// making a car factory but have to keep the constructor for Vehicle since it is part of the factory
const Vehicle = function(name, wheels) {
    this.name = name;
    this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
    return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
    return 'Stopping';
};

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

function CarFactory(name, color) {
    const newCar = Object.assign (
        {}, //start with this
        {color}, //then add color
        new Vehicle(name), //this creates the inheritance pattern

    );
    const newMotorcycle = Object.assign(
        {},
        (color),
        new Vehicle(name),
    )
    //Not a hard requirement-makes developers add future properties to the factory and not all over the place-CLEANER CODE
    return Object.freeze(newCar);
    return Object.freeze(newMotorcycle);
}

module.exports = CarFactory;


