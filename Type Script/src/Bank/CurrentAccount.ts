import { BankAccount } from "./BankAccount";

export class CurrentAccount extends BankAccount{
    private static readonly OdLimit = 5000;
    
    constructor(AccountNumber:string, HolderName:string, Balance:number){
        super(AccountNumber,HolderName,Balance);
    }

    public override withdrew(amount: number): void {
        if(this.Balance-amount<-(CurrentAccount.OdLimit)){
            console.log(`Withdrawal Denied. Overdraft limit of Rs.${CurrentAccount.OdLimit} exceeded..`)
        }
        else{
            this.Balance-=amount;
            console.log(`Withdrew Rs.${amount}. New balance is ${this.Balance}`);
        }
    }

    public override applayMonthlyUpdate(): void {
        if(this.Balance<0){
            console.log(`Current Account overdrawn by Rs.${Math.abs(this.Balance)}. No interest applied `)
        }
        else{
            console.log(`No interest for current accounts. Balance remains ${this.Balance}.`);
        } 
    }
}