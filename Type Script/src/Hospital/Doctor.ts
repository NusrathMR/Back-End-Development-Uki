import { Staff } from "./Staff";

export class Doctor extends Staff{
    private consultantionsCount:number;
    private static readonly consultationFee = 1000;


    constructor(staffID:string, name:string, baseSalary:number, consultationCount:number){
        super(staffID, name, baseSalary);
        this.consultantionsCount = consultationCount;
    }

    public diagnose(patientName:string):void{
        console.log(`Dr.${this.getname()} is diagnoning patient: ${patientName}`);
        this.consultantionsCount++;
    }

    public override calculateTotalSalary(): number {
        return this.getbaseSalary() + (this.consultantionsCount*Doctor.consultationFee);
    }

    

}