"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleApp = void 0;
const Car_1 = require("./Car");
const MotorCycle_1 = require("./MotorCycle");
class vehicleApp {
    generateRentalReport(vehiclelist) {
        console.log("Generating report...");
        for (const vehicle of vehiclelist) {
            console.log(`Vehicle Id: ${vehicle.getvehicleId()} (${vehicle.getbrand()}) = ${vehicle.calculateRentalCost(2)}`);
        }
    }
    main() {
        const Car1 = new Car_1.Car("C001", "Toyota", 1000);
        const Car2 = new Car_1.Car("C002", "Nissan", 1200);
        const MotorCycle1 = new MotorCycle_1.MotorCycle("M001", "Hero", 400);
        const MotorCycle2 = new MotorCycle_1.MotorCycle("M002", "Bajaj", 300);
        Car1.updateDailyRate(5000);
        Car2.updateDailyRate(6000);
        MotorCycle1.updateDailyRate(3000);
        MotorCycle2.updateDailyRate(2500);
        Car1.calculateRentalCost(5);
        Car2.calculateRentalCost(8);
        MotorCycle1.calculateRentalCost(10);
        MotorCycle2.calculateRentalCost(15);
        const vehiclelist = [Car1, Car2, MotorCycle1, MotorCycle2];
        this.generateRentalReport(vehiclelist);
    }
}
exports.vehicleApp = vehicleApp;
//# sourceMappingURL=vehicleApp.js.map