import { FullTimeTeachers } from "./FullTimeTeacher";
export declare class PartTimeTeacher extends FullTimeTeachers {
    private hoursCount;
    private static readonly hourFee;
    constructor(teacherId: string, name: string, baseSalary: number, hoursCount: number);
    claculateMonthlySalary(): number;
    submitTimeSheet(): void;
}
//# sourceMappingURL=PartTimeTeacher.d.ts.map