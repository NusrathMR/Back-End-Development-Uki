"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartTimeTeacher = void 0;
const FullTimeTeacher_1 = require("./FullTimeTeacher");
class PartTimeTeacher extends FullTimeTeacher_1.FullTimeTeachers {
    hoursCount;
    static hourFee = 1200;
    constructor(teacherId, name, baseSalary, hoursCount) {
        super(teacherId, name, baseSalary);
        this.hoursCount = hoursCount;
    }
    claculateMonthlySalary() {
        return this.getbaseSalary() + (PartTimeTeacher.hourFee * this.hoursCount);
    }
    submitTimeSheet() {
        this.hoursCount++;
        console.log(`your working hour count is ${this.hoursCount}`);
    }
}
exports.PartTimeTeacher = PartTimeTeacher;
//# sourceMappingURL=PartTimeTeacher.js.map