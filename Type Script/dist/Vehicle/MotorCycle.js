"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorCycle = void 0;
const ABCvehicle_1 = require("./ABCvehicle");
class MotorCycle extends ABCvehicle_1.ABCvehicle {
    static helmetCharge = 200;
    constructor(vehicleId, brand, dailyRate) {
        super(vehicleId, brand, dailyRate);
    }
    calculateRentalCost(days) {
        return (this.getdailyRate() * days) + MotorCycle.helmetCharge;
    }
}
exports.MotorCycle = MotorCycle;
//# sourceMappingURL=MotorCycle.js.map