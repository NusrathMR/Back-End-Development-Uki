"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
class Staff {
    staffID;
    name;
    baseSalary;
    constructor(staffID, name, baseSalary) {
        this.staffID = staffID;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getstaffID() {
        return this.staffID;
    }
    getname() {
        return this.name;
    }
    getbaseSalary() {
        return this.baseSalary;
    }
    setbaseSalary(baseSalary) {
        this.baseSalary = baseSalary;
    }
    updateSalary(newSalary) {
        if (this.baseSalary <= 0) {
            console.log(`Invalis salary update for ${this.name}, value must be positive`);
        }
        else {
            this.baseSalary = newSalary;
            console.log(`${this.name}'s base salary updated to Rs.${this.baseSalary}.`);
        }
    }
    calculateTotalSalary() {
        return this.baseSalary;
    }
}
exports.Staff = Staff;
//# sourceMappingURL=Staff.js.map