import { FullTimeTeachers } from "./FullTimeTeacher";

export class PartTimeTeacher extends FullTimeTeachers{
    private hoursCount:number;
    private static readonly hourFee = 1200;

    constructor(teacherId:string, name:string, baseSalary:number, hoursCount:number){
        super(teacherId, name, baseSalary);
        this.hoursCount = hoursCount
    }

    public override claculateMonthlySalary(): number {
        return this.getbaseSalary()+(PartTimeTeacher.hourFee*this.hoursCount);
    }

    public submitTimeSheet():void{
        this.hoursCount++;
        console.log (`your working hour count is ${this.hoursCount}`);
    }
}