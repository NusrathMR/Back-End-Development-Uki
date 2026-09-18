import { Teacher } from "./Teachers";

export class FullTimeTeachers extends Teacher{
    private static readonly bonus = 500;
    
    constructor(teacherId:string, name:string, baseSalary:number){
        super(teacherId, name, baseSalary);
    }

    public override claculateMonthlySalary():number{
        return this.getbaseSalary() + FullTimeTeachers.bonus;
    }

    public countMeeting(meetingCount:number):void{
        meetingCount++;
        console.log("Meeting Count is " +meetingCount);
    }

}