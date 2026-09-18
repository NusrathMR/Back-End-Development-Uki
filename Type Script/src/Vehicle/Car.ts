import { ABCvehicle } from "./ABCvehicle";

export class Car extends ABCvehicle{
    private static readonly driverCharge = 1500;

    constructor (vehicleID:string, brand:string, dailyRate:number){
        super(vehicleID, brand, dailyRate);
    }

    public calculateRentalCost(days: number): number {
        return (this.getdailyRate()*days) + Car.driverCharge;
    }

}