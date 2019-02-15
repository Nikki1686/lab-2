'use strict';

//Variable
//name, wheels
//Behavior (Functions)
//drive, stop
// class Vehicle {
//   constructor(name, wheels) {
//     this.name = name;
//     this.wheels = wheels;
//   }
//   drive() {
//     return 'Moving Forward';
//   }
//   stop() {
//     return 'Stopping';
//   }
// };
//---------------------this whole constructor goes inside of the class and removes the prototypes
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

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

module.exports = {Car, Motorcycle};
