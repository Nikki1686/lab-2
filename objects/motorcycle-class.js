'use strict';

class Motorcycle {
    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
    }
    wheelie() {
        return 'Wheee!';
    }
    stop() {
        return 'Stopping';
    }
}

module.exports = Motorcycle;