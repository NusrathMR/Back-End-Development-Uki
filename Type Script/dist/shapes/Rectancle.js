"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectancle = void 0;
const geoMetricObjects_1 = require("./geoMetricObjects");
class rectancle extends geoMetricObjects_1.geoMetricObjects {
    width;
    height;
    constructor(width, height, colour, filled) {
        super(colour, filled);
        this.width = width;
        this.height = height;
    }
    getwidth() {
        return this.width;
    }
    setwidth(width) {
        this.width = width;
    }
    getheight() {
        return this.height;
    }
    setheight(height) {
        this.height = height;
    }
    findarea() {
        return (this.width * this.height);
    }
    printrectangle() {
        console.log(`${this.toString}, ${this.width}, ${this.height}`);
    }
}
exports.rectancle = rectancle;
//# sourceMappingURL=Rectancle.js.map