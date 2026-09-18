import { ABCvehicle } from "./ABCvehicle";
export declare class Car extends ABCvehicle {
    private static readonly driverCharge;
    constructor(vehicleID: string, brand: string, dailyRate: number);
    calculateRentalCost(days: number): number;
}
//# sourceMappingURL=Car.d.ts.map