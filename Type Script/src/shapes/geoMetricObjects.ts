export class geoMetricObjects{
    private colour:string;
    private filled:boolean;
    private dateCreated:Date;

    constructor(colour:string, filled:boolean){
        this.colour=colour;
        this.filled=filled;
        this.dateCreated=new Date();
    }

    public getcolour():string{
        return this.colour;
    }

    public setcolour(colour:string):void{
        this.colour=colour;
    }

    public isfilled():boolean{
        return this.filled;
    }
    
    public setfilled(filled:boolean):void{
        this.filled=filled;
    }

    public getDateCreated():Date{
        return this.dateCreated;
    }

    public toString():string{
        return `colour: ${this.colour}, filled: ${this.filled}, dateCreated: ${this.dateCreated}`;
    }

}