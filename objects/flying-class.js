'use strict';

class FlyingVehicle {
    constructor(name, wings) {
        this.name = name;
        this.wings = wings;
    }
    fly() {
        return 'We are flying';
    }
    stop() {
        return 'We have reached our destination';
    }
};

class Airplane extends FlyingVehicle {
    constructor(name) {
        super(name, 5);
    }
}
class Helicopter extends FlyingVehicle {
    constructor(name) {
        super(name, 0);
    }
};

module.exports = {Airplane, Helicopter};