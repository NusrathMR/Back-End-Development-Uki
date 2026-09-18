import { geoMetricObjects } from "./geoMetricObjects";

export class rectancle extends geoMetricObjects{
    private width:number;
    private height:number;

    constructor(width:number, height:number, colour:string, filled: boolean){
        super(colour,filled);
        this.width=width;
        this.height=height;
    }

    public getwidth():number{
        return this.width;
    }

    public setwidth(width:number):void{
        this.width=width;
    }

    public getheight():number{
        return this.height;
    }

    public setheight(height:number):void{
        this.height=height;
    }

    public findarea():number{
        return(this.width*this.height);
    }

    public printrectangle():void{
        console.log(`${this.toString}, ${this.width}, ${this.height}`);
    }


}