"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
const BankAccount_1 = require("./BankAccount");
class CurrentAccount extends BankAccount_1.BankAccount {
    static OdLimit = 5000;
    constructor(AccountNumber, HolderName, Balance) {
        super(AccountNumber, HolderName, Balance);
    }
    withdrew(amount) {
        if (this.Balance - amount < -(CurrentAccount.OdLimit)) {
            console.log(`Withdrawal Denied. Overdraft limit of Rs.${CurrentAccount.OdLimit} exceeded..`);
        }
        else {
            this.Balance -= amount;
            console.log(`Withdrew Rs.${amount}. New balance is ${this.Balance}`);
        }
    }
    applayMonthlyUpdate() {
        if (this.Balance < 0) {
            console.log(`Current Account overdrawn by Rs.${Math.abs(this.Balance)}. No interest applied `);
        }
        else {
            console.log(`No interest for current accounts. Balance remains ${this.Balance}.`);
        }
    }
}
exports.CurrentAccount = CurrentAccount;
//# sourceMappingURL=CurrentAccount.js.map