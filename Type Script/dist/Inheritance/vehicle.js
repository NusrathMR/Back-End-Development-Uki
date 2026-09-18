"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    speed = 50;
    constructor(speed) {
        this.speed = speed;
    }
    getSpeedOfTheVehicle() {
        console.log('The speed of the vehicle is ${this.speed} km/hr');
    }
}
exports.Vehicle = Vehicle;
//# sourceMappingURL=vehicle.js.map