export class Teacher{
    private teacherId:string;
    private name:string;
    private baseSalary:number;

    constructor (teacherId:string, name:string, baseSalary:number){
        this.teacherId = teacherId;
        this.name = name;
        this.baseSalary = baseSalary;    
    }

    public getteacherId():string{
        return this.teacherId;
    }

    public getname():string{
        return this.name;
    }

    public getbaseSalary(){
        return this.baseSalary;
    }

    public updateSalary(newSalary: number):void{
        if (newSalary<=0){
            console.log("You Endered value is must be positive");
        }
        else {
           this.baseSalary = newSalary;
        }
    }

    public claculateMonthlySalary():number{
        return this.baseSalary;
    }


}