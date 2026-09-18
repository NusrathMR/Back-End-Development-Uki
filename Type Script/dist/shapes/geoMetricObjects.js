"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geoMetricObjects = void 0;
class geoMetricObjects {
    colour;
    filled;
    dateCreated;
    constructor(colour, filled) {
        this.colour = colour;
        this.filled = filled;
        this.dateCreated = new Date();
    }
    getcolour() {
        return this.colour;
    }
    setcolour(colour) {
        this.colour = colour;
    }
    isfilled() {
        return this.filled;
    }
    setfilled(filled) {
        this.filled = filled;
    }
    getDateCreated() {
        return this.dateCreated;
    }
    toString() {
        return `colour: ${this.colour}, filled: ${this.filled}, dateCreated: ${this.dateCreated}`;
    }
}
exports.geoMetricObjects = geoMetricObjects;
//# sourceMappingURL=geoMetricObjects.js.map