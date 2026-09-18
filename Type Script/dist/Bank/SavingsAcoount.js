"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const BankAccount_1 = require("./BankAccount");
class SavingsAccount extends BankAccount_1.BankAccount {
    static minBalance = 1000;
    static interestrate = 0.02;
    constructor(AccountNumber, HolderName, Balance) {
        super(AccountNumber, HolderName, Balance);
        console.log("Savings Account Created");
    }
    withdrew(amount) {
        if (this.Balance - amount < SavingsAccount.minBalance) {
            console.log(`Withdrawal denied. Savings account must be maintained a minimum balance of Rs.${SavingsAccount.minBalance}`);
        }
        else {
            super.withdrew(amount);
        }
    }
    applayMonthlyUpdate() {
        const interest = this.Balance * SavingsAccount.interestrate;
        this.Balance += interest;
        console.log(`The interest amount is Rs.${interest}. And the new balance is &{this.balance}`);
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=SavingsAcoount.js.map