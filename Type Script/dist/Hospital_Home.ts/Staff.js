"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
class Staff {
    staffId;
    name;
    baseSalary;
    constructor(staffId, name, baseSalary) {
        this.staffId = staffId;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getstaffId() {
        return this.staffId;
    }
    getname() {
        return this.name;
    }
    getbaseSalary() {
        return this.baseSalary;
    }
    updateSalary(newSalary) {
        this.baseSalary = newSalary;
        console.log(`your salary was updated. your new salary is Rs.${this.baseSalary}.`);
    }
    calculatedTotalSalary() {
        return this.baseSalary;
    }
}
exports.Staff = Staff;
//# sourceMappingURL=Staff.js.map