"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nurses = void 0;
const Staff_1 = require("./Staff");
class Nurses extends Staff_1.Staff {
    shiftWorked;
    static shifttFee = 700;
    constructor(staffID, name, baseSalary, shiftWorked) {
        super(staffID, name, baseSalary);
        this.shiftWorked = shiftWorked;
    }
    assist(procedureName) {
        console.log(`This Nurse work for this ${procedureName}`);
        this.shiftWorked++;
    }
    calculateTotalSalary() {
        return this.getbaseSalary() + (this.shiftWorked * Nurses.shifttFee);
    }
}
exports.Nurses = Nurses;
//# sourceMappingURL=Nurses.js.map