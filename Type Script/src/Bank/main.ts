import { BankAccount } from "./BankAccount";
import { CurrentAccount } from "./CurrentAccount";
import { SavingsAccount } from "./SavingsAcoount";


export class BankMain{
    processMonthEnd(accounts:BankAccount[]):void{
        for(const acc of accounts){
            console.log(`Account: ${acc.getAccountNumber()}. ${acc.getHolderName()}.`);
            acc.applayMonthlyUpdate();
        }
    }

    public banckMain():void{
        const Savings = new SavingsAccount("SA001", "Jack Sparrow", 5000);
        const Current = new CurrentAccount("CA001", "Harry Potter", 3000);

        Savings.deposit(2500);
        Savings.withdrew(1000);

        Current.deposit(1000);
        Current.withdrew(4000); 
    }
}


