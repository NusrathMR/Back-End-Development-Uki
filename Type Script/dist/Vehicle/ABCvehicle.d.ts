export declare class ABCvehicle {
    private vehicleId;
    private brand;
    private dailyRate;
    constructor(vehicleId: string, brand: string, dailyRate: number);
    getvehicleId(): string;
    getbrand(): string;
    getdailyRate(): number;
    updateDailyRate(newRate: number): void;
    calculateRentalCost(days: number): number;
}
//# sourceMappingURL=ABCvehicle.d.ts.map