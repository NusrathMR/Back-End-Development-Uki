import { geoMetricObjects } from "./geoMetricObjects";

export class circle extends geoMetricObjects{
    private radius:number;

    constructor(radius: number, colour:string, filled: boolean){
        super(colour,filled);
        this.radius=radius;
    }

    public getRadius():number{
        return this.radius;
    }

    public setRadius(radius:number):void{
        this.radius=radius;
    }

    public getArea():number{
        return(Math.PI*Math.pow(this.radius,2));
    }
    
    public getperimeter():number{
        return(Math.PI*this.radius*this.radius);
    }

    public getDiameter():number{
        return(this.radius*2);
    }

    public printCircle():void{
        console.log(`${this.toString}, Radius: ${this.radius}`);
    }
}

