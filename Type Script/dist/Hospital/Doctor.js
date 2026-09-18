"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const Staff_1 = require("./Staff");
class Doctor extends Staff_1.Staff {
    consultantionsCount;
    static consultationFee = 1000;
    constructor(staffID, name, baseSalary, consultationCount) {
        super(staffID, name, baseSalary);
        this.consultantionsCount = consultationCount;
    }
    diagnose(patientName) {
        console.log(`Dr.${this.getname()} is diagnoning patient: ${patientName}`);
        this.consultantionsCount++;
    }
    calculateTotalSalary() {
        return this.getbaseSalary() + (this.consultantionsCount * Doctor.consultationFee);
    }
}
exports.Doctor = Doctor;
//# sourceMappingURL=Doctor.js.map