'use strict';


const Vehicle = require('./vehicle-constructor.js');
const FlyingVehicle = require('./flying-constructor');
const SeaCreature = require('./creature-constructor');
// const Vehicle = require('./class.js');
// const Vehicle = require('./factory.js');

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

const boeing = new FlyingVehicle.Airplane('Boeing 747');
console.log(boeing.name, boeing.fly(), boeing.stop());

const apache = new FlyingVehicle.Helicopter('Apache');
console.log(apache.name, apache.fly(), apache.stop());

const fish = new SeaCreature.Fish('Piranha');
console.log(fish.name, fish.swims(), fish.sharkbait());

const lobster = new SeaCreature.Lobster('Lobster');
console.log(lobster.name, lobster.swims(), lobster.snip(), lobster.sharkbait());