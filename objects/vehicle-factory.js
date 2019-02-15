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


function CarFactory(name, color) {
    const newCar = Object.assign (
        {}, //start with this
        {color}, //then add color
        new Vehicle(name), //this creates the inheritance pattern
    );
    //Not a hard requirement-makes developers add future properties to the factory and not all over the place-CLEANER CODE
    return Object.freeze(newCar);
}

module.exports = CarFactory;


