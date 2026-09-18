"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
const geoMetricObjects_1 = require("./geoMetricObjects");
class circle extends geoMetricObjects_1.geoMetricObjects {
    radius;
    constructor(radius, colour, filled) {
        super(colour, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return (Math.PI * Math.pow(this.radius, 2));
    }
    getperimeter() {
        return (Math.PI * this.radius * this.radius);
    }
    getDiameter() {
        return (this.radius * 2);
    }
    printCircle() {
        console.log(`${this.toString}, Radius: ${this.radius}`);
    }
}
exports.circle = circle;
//# sourceMappingURL=circle.js.map