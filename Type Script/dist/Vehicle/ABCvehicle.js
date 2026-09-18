"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABCvehicle = void 0;
class ABCvehicle {
    vehicleId;
    brand;
    dailyRate;
    constructor(vehicleId, brand, dailyRate) {
        this.vehicleId = vehicleId;
        this.brand = brand;
        this.dailyRate = dailyRate;
    }
    getvehicleId() {
        return this.vehicleId;
    }
    getbrand() {
        return this.brand;
    }
    getdailyRate() {
        return this.dailyRate;
    }
    updateDailyRate(newRate) {
        if (newRate > 0) {
            this.dailyRate = newRate;
            console.log(`Daily rental rat is updated to ${newRate}`);
        }
        else {
            console.log(`Your endered new rate value ${newRate} is 0 or below. Please ender positive value `);
        }
    }
    calculateRentalCost(days) {
        return this.dailyRate;
    }
}
exports.ABCvehicle = ABCvehicle;
//# sourceMappingURL=ABCvehicle.js.map