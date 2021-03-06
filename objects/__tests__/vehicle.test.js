'use strict';

const Vehicle = require('../vehicle-class');
const FlyingVehicle = require('../flying-class');
const SeaCreature = require('../creature-class');


describe('Vehicle', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('can do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

  describe('FlyingVehicle', () => {

    describe('Airplane', () => {

      let airplane = new FlyingVehicle.Airplane('foo');

      it('has 5 wings', () => {
        expect(airplane.wings).toEqual(5);
      });

      it('can fly', () => {
        expect(airplane.fly()).toBeTruthy();
      });

      it('can stop', () => {
        expect(airplane.stop()).toBeTruthy();
      });

    });

    describe('Helicopter', () => {

      let helicopter = new FlyingVehicle.Helicopter('foo');

      it('has 0 wings', () => {
        expect(helicopter.wings).toEqual(0);
      });

      it('can fly', () => {
        expect(helicopter.fly()).toBeTruthy();
      });

      it('can stop', () => {
        expect(helicopter.stop()).toBeTruthy();
      });

    });

  });

  describe('SeaCreature', () => {
    describe('Fish', () => {
      let fish = new SeaCreature.Fish('foo');

      it('has 0 claws', () => {
        expect(fish.claws).toEqual(0);
      });

      it('can swim', () => {
        expect(fish.swims()).toBeTruthy();
      });

      it('is sharkbait', () => {
        expect(fish.sharkbait()).toBeTruthy();
      });
    });

    describe('Lobster', () => {
      let lobster = new SeaCreature.Lobster('foo');

      it('has 2 claws', () => {
        expect(lobster.claws).toEqual(2);
      });

      it('can swim', () => {
        expect(lobster.swims()).toBeTruthy();
      });
      it('is sharkbait', () => {
        expect(lobster.sharkbait()).toBeTruthy();
      });

      it('can eat sharks', () => {
        expect(lobster.snip()).toBeTruthy();
      });

    });

  });

});
