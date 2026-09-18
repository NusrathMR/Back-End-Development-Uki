"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Doctor_1 = require("./Doctor");
const Nurses_1 = require("./Nurses");
class App {
    generatePayRoll(staffList) {
        console.log("Generating Payroll...");
        for (const staff of staffList) {
            console.log(`${staff.getname()} (${staff.getstaffID()}): Rs.${staff.calculateTotalSalary()}`);
        }
    }
    main() {
        const doctor1 = new Doctor_1.Doctor("D001", "Dr.Puji", 100000, 15);
        const doctor2 = new Doctor_1.Doctor("D002", "Dr.Athham", 80000, 30);
        const nurse1 = new Nurses_1.Nurses("N001", "Anura", 50000, 20);
        const nurse2 = new Nurses_1.Nurses("N002", "Kumara", 40000, 10);
        doctor1.diagnose("Asthaf");
        doctor2.diagnose("Thanushika");
        nurse1.assist("Dressing Wounds to Ashtaf");
        nurse2.assist("Counselling to Thanushika");
        doctor1.updateSalary(-65000);
        doctor1.updateSalary(175000);
        nurse1.updateSalary(25000);
        nurse2.updateSalary(10000);
        const staffList = [doctor1, doctor2, nurse1, nurse2];
        this.generatePayRoll(staffList);
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map