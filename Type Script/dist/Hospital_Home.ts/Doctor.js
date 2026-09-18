"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const Staff_1 = require("./Staff");
class Doctor extends Staff_1.Staff {
    consultationsCount;
    static consultationFee = 2000;
    constructor(staffId, name, baseSalary, ConsultationsCount) {
        super(staffId, name, baseSalary);
        this.consultationsCount = this.consultationsCount;
    }
}
exports.Doctor = Doctor;
//# sourceMappingURL=Doctor.js.map