export class Staff{
    private staffID:string;
    private name:string;
    private baseSalary:number;

    constructor(staffID:string, name:string, baseSalary:number){
        this.staffID = staffID;
        this.name = name;
        this.baseSalary = baseSalary;
    }

    public getstaffID():string{
        return this.staffID;
    }

    public getname():string{
        return this.name;
    }

    public getbaseSalary():number{
        return this.baseSalary;
    }

    public setbaseSalary(baseSalary:number):void{
        this.baseSalary = baseSalary;
    }

    public updateSalary(newSalary: number):void{
        if (this.baseSalary<=0){
            console.log(`Invalis salary update for ${this.name}, value must be positive`)
        }
        else{
            this.baseSalary = newSalary;
            console.log(`${this.name}'s base salary updated to Rs.${this.baseSalary}.`);
        }
    }

    public calculateTotalSalary():number{
        return this.baseSalary;
    }
}