import { BankAccount } from "./BankAccount";

export class SavingsAccount extends BankAccount{
    private static minBalance = 1000;
    private static readonly interestrate = 0.02;

    constructor(AccountNumber:string, HolderName:string, Balance:number){
        super(AccountNumber, HolderName, Balance);
        console.log("Savings Account Created");
    }

    public override withdrew(amount: number): void {
        if (this.Balance-amount<SavingsAccount.minBalance){
            console.log(`Withdrawal denied. Savings account must be maintained a minimum balance of Rs.${SavingsAccount.minBalance}`)
        }
        else{
            super.withdrew(amount);

        }
    }

    public override applayMonthlyUpdate(): void {
        const interest = this.Balance*SavingsAccount.interestrate;
        this.Balance +=interest;
        console.log(`The interest amount is Rs.${interest}. And the new balance is &{this.balance}`)
    }
}
