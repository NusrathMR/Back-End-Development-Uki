import { Vehicle } from "./vehicle";

export class MotorBike extends Vehicle{
    private speedofTheMotorBike:number = 100;

    constructor(speed:number, speedofTheMotorBike:number){
        super(speed);
        this.speedofTheMotorBike=speedofTheMotorBike;
    }

    public getSpeedOfTheMoterBike():void{
        console.log('The speed of the vehicle is ${this.speedofTheMotorBike} km/hr')
    }
}