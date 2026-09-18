import { MotorBike } from "../Inheritance/morotBike";
import { Vehicle } from "../Inheritance/vehicle";
import { ABCvehicle } from "./ABCvehicle";
import { Car } from "./Car";
import { MotorCycle } from "./MotorCycle";

export class vehicleApp{
    generateRentalReport(vehiclelist: ABCvehicle[]):void{
        console.log("Generating report...");
        for (const vehicle of vehiclelist){
            console.log(`Vehicle Id: ${vehicle.getvehicleId()} (${vehicle.getbrand()}) = ${vehicle.calculateRentalCost(2)}`);
        }
    }

    public main(){
        const Car1 = new Car("C001", "Toyota", 1000);
        const Car2 = new Car("C002", "Nissan", 1200);

        const MotorCycle1 = new MotorCycle("M001", "Hero", 400);
        const MotorCycle2 = new MotorCycle("M002", "Bajaj", 300);

        Car1.updateDailyRate(5000);
        Car2.updateDailyRate(6000);

        MotorCycle1.updateDailyRate(3000);
        MotorCycle2.updateDailyRate(2500);

        Car1.calculateRentalCost(5);
        Car2.calculateRentalCost(8);

        MotorCycle1.calculateRentalCost(10);
        MotorCycle2.calculateRentalCost(15);

        const vehiclelist:ABCvehicle[]=[Car1, Car2, MotorCycle1, MotorCycle2];
        this.generateRentalReport(vehiclelist);
    }
}