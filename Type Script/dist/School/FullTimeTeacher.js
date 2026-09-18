"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTimeTeachers = void 0;
const Teachers_1 = require("./Teachers");
class FullTimeTeachers extends Teachers_1.Teacher {
    static bonus = 500;
    constructor(teacherId, name, baseSalary) {
        super(teacherId, name, baseSalary);
    }
    claculateMonthlySalary() {
        return this.getbaseSalary() + FullTimeTeachers.bonus;
    }
    countMeeting(meetingCount) {
        meetingCount++;
        console.log("Meeting Count is " + meetingCount);
    }
}
exports.FullTimeTeachers = FullTimeTeachers;
//# sourceMappingURL=FullTimeTeacher.js.map