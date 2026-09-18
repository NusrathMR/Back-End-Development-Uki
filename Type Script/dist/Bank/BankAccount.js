"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    AccountNumber;
    HolderName;
    Balance;
    constructor(AccountNumber, HolderName, Balance) {
        this.AccountNumber = AccountNumber;
        this.HolderName = HolderName;
        this.Balance = Balance;
    }
    getAccountNumber() {
        return this.AccountNumber;
    }
    // public setAccountNumber(AccountNumber:string):void{
    //     this.AccountNumber=AccountNumber;
    // }
    getHolderName() {
        return this.HolderName;
    }
    // public setHolderName(HolderName:string):void{
    //     this.HolderName=HolderName;
    // }
    getBalance() {
        return this.Balance;
    }
    // public setBalanace(Balance:number):void{
    //     this.Balance=Balance;
    // }
    deposit(amount) {
        if (amount <= 0) {
            console.log(`Deposit amount must be positive.`);
            return;
        }
        this.Balance += amount;
        console.log(`Deposited Rs. ${amount} New Balance is Rs.${this.Balance}`);
    }
    withdrew(amount) {
        if (amount <= 0) {
            console.log(`Withdrewal amount must be positive`);
            return;
        }
        if (amount > this.Balance) {
            console.log("Insufficient Balance");
            return;
        }
        this.Balance -= amount;
        console.log(`Witdrew Rs. ${amount}, New balance is RTCRtpScriptTransform.${this.Balance}`);
    }
    applayMonthlyUpdate() {
        console.log("It's standard account. No Monthly Update Rule Applied");
    }
    SentTo() {
        return `Account Number: ${this.AccountNumber}, Holder Name: ${this.HolderName}, Balance: ${this.Balance}`;
    }
}
exports.BankAccount = BankAccount;
//# sourceMappingURL=BankAccount.js.map