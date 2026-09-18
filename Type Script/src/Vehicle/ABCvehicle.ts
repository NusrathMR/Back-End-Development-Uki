export class ABCvehicle{
    private vehicleId:string;
    private brand:string;
    private dailyRate:number;

    constructor (vehicleId:string, brand:string, dailyRate:number){
        this.vehicleId = vehicleId;
        this.brand = brand;
        this.dailyRate = dailyRate;
    }

    public getvehicleId():string{
        return this.vehicleId;
    }

    public getbrand():string{
        return this.brand;
    }

    public getdailyRate():number{
        return this.dailyRate;
    }

    public updateDailyRate(newRate: number):void{
        if (newRate>0){
            this.dailyRate = newRate;
            console.log(`Daily rental rat is updated to ${newRate}`);
        }
        else{
            console.log(`Your endered new rate value ${newRate} is 0 or below. Please ender positive value `)
        }
    }

    public calculateRentalCost(days:number):number{
        return this.dailyRate;
    }
}