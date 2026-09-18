import { Staff } from "./Staff";

export class Nurses extends Staff{
    private shiftWorked:number;
    private static readonly shifttFee = 700;

    constructor(staffID:string, name:string, baseSalary:number, shiftWorked:number){
        super( staffID, name, baseSalary);
        this.shiftWorked = shiftWorked;
    }

    public assist(procedureName: string):void{
        console.log(`This Nurse work for this ${procedureName}`);
        this.shiftWorked++;
    }

    public override calculateTotalSalary(): number {
        return this.getbaseSalary() + (this.shiftWorked*Nurses.shifttFee);
        
    }
}