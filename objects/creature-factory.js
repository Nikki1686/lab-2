'use strict';

const SeaCreature = function(name, claws) {
    this.name = name;
    this.claws = claws;
}

function Fish (name) {
    const newFish = Obect.assign(
        {},
        {name},
        {swims},
        {sharkbait},
        new SeaCreature(name, 0)
    );

    function swims() {
        return 'Just keep swimming';
    }

    function sharkbait() {
        return 'I just became sharkbait';
    }

    return Object.freeze(assign);
}

function Lobster (name) {
    const newLobster = Object.assign (
        {},
        {name},
        {swims},
        {sharkbait},
        {snip},
        new SeaCreature(name, 2)
    );

    function swims () {
        return 'Just keep swimming';
    }

    function sharkbait () {
        return 'I just became sharkbait';
    }

    function snip () {
        return 'I eat sharks for dinner';
    }

    return Object.freeze(newLobster);
}

module.exports = {Fish, Lobster};