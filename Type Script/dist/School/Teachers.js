"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    teacherId;
    name;
    baseSalary;
    constructor(teacherId, name, baseSalary) {
        this.teacherId = teacherId;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getteacherId() {
        return this.teacherId;
    }
    getname() {
        return this.name;
    }
    getbaseSalary() {
        return this.baseSalary;
    }
    updateSalary(newSalary) {
        if (newSalary <= 0) {
            console.log("You Endered value is must be positive");
        }
        else {
            this.baseSalary = newSalary;
        }
    }
    claculateMonthlySalary() {
        return this.baseSalary;
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=Teachers.js.map