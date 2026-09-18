import { FullTimeTeachers } from "./FullTimeTeacher";
import { PartTimeTeacher } from "./PartTimeTeacher";
import { Teacher } from "./Teachers";

export class schoolApp{
    generateSalaryReport(teachers: Teacher[]):void{
        console.log("Generating Salary Report...");
        for (const object of teachers){
            console.log(`TeacherId: ${object.getteacherId()}  TeachersName: ${object.getname()} TotalSalary: ${object.claculateMonthlySalary()}`);
        }
    }

    public main(){
        const FullTimeTeachers1 = new FullTimeTeachers("T001", "Athham", 30000);
        const FullTimeTeachers2 = new FullTimeTeachers("T002", "Puji", 35000);

        const PartTimeTeacher1 = new PartTimeTeacher("TP001", "Asthaf", 5000, 10);
        const PartTimeTeacher2 = new PartTimeTeacher("TP002", "Taksha", 6000, 20);

        FullTimeTeachers1.countMeeting(20);
        FullTimeTeachers2.countMeeting(25);

        PartTimeTeacher1.submitTimeSheet();
        PartTimeTeacher2.submitTimeSheet();

        const teachers: Teacher[] = [FullTimeTeachers1, FullTimeTeachers2, PartTimeTeacher1, PartTimeTeacher2];
        this.generateSalaryReport(teachers);


    }
}
