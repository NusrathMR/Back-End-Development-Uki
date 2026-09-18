"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const ABCvehicle_1 = require("./ABCvehicle");
class Car extends ABCvehicle_1.ABCvehicle {
    static driverCharge = 1500;
    constructor(vehicleID, brand, dailyRate) {
        super(vehicleID, brand, dailyRate);
    }
    calculateRentalCost(days) {
        return (this.getdailyRate() * days) + Car.driverCharge;
    }
}
exports.Car = Car;
//# sourceMappingURL=Car.js.map