"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolApp = void 0;
const FullTimeTeacher_1 = require("./FullTimeTeacher");
const PartTimeTeacher_1 = require("./PartTimeTeacher");
class schoolApp {
    generateSalaryReport(teachers) {
        console.log("Generating Salary Report...");
        for (const object of teachers) {
            console.log(`TeacherId: ${object.getteacherId()}  TeachersName: ${object.getname()} TotalSalary: ${object.claculateMonthlySalary()}`);
        }
    }
    main() {
        const FullTimeTeachers1 = new FullTimeTeacher_1.FullTimeTeachers("T001", "Athham", 30000);
        const FullTimeTeachers2 = new FullTimeTeacher_1.FullTimeTeachers("T002", "Puji", 35000);
        const PartTimeTeacher1 = new PartTimeTeacher_1.PartTimeTeacher("TP001", "Asthaf", 5000, 10);
        const PartTimeTeacher2 = new PartTimeTeacher_1.PartTimeTeacher("TP002", "Taksha", 6000, 20);
        FullTimeTeachers1.countMeeting(20);
        FullTimeTeachers2.countMeeting(25);
        PartTimeTeacher1.submitTimeSheet();
        PartTimeTeacher2.submitTimeSheet();
        const teachers = [FullTimeTeachers1, FullTimeTeachers2, PartTimeTeacher1, PartTimeTeacher2];
        this.generateSalaryReport(teachers);
    }
}
exports.schoolApp = schoolApp;
//# sourceMappingURL=schoolApp.js.map