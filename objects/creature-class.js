'use strict';

class SeaCreature {
    constructor(name, claws) {
        this.name = name;
        this.claws = claws;
    }
    swims() {
        return 'Just keep swimming';
    }
    sharkbait() {
        return 'I just became sharkbait';
    }
}

class Fish extends SeaCreature {
    constructor(name) {
        super(name, 0);
    }
}
class Lobster extends SeaCreature {
    constructor(name) {
        super(name, 2);
    }
    snip() {
        return 'I eat sharks for dinner';
    }
}

module.exports = {Fish, Lobster};