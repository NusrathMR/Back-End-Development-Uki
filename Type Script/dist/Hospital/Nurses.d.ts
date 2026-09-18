import { Staff } from "./Staff";
export declare class Nurses extends Staff {
    private shiftWorked;
    private static readonly shifttFee;
    constructor(staffID: string, name: string, baseSalary: number, shiftWorked: number);
    assist(procedureName: string): void;
    calculateTotalSalary(): number;
}
//# sourceMappingURL=Nurses.d.ts.map