import { geoMetricObjects } from "./geoMetricObjects";
export declare class circle extends geoMetricObjects {
    private radius;
    constructor(radius: number, colour: string, filled: boolean);
    getRadius(): number;
    setRadius(radius: number): void;
    getArea(): number;
    getperimeter(): number;
    getDiameter(): number;
    printCircle(): void;
}
//# sourceMappingURL=circle.d.ts.map