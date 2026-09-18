import { Staff } from "./Staff";
export declare class Doctor extends Staff {
    private consultantionsCount;
    private static readonly consultationFee;
    constructor(staffID: string, name: string, baseSalary: number, consultationCount: number);
    diagnose(patientName: string): void;
    calculateTotalSalary(): number;
}
//# sourceMappingURL=Doctor.d.ts.map