import { ABCvehicle } from "./ABCvehicle";

export class MotorCycle extends ABCvehicle{
    private static readonly helmetCharge = 200;

    constructor (vehicleId:string, brand:string, dailyRate:number){
        super (vehicleId, brand, dailyRate);
    }

    public override calculateRentalCost(days: number): number {
        return (this.getdailyRate()*days) + MotorCycle.helmetCharge;
    }
}