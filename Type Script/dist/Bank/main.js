"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankMain = void 0;
const CurrentAccount_1 = require("./CurrentAccount");
const SavingsAcoount_1 = require("./SavingsAcoount");
class BankMain {
    processMonthEnd(accounts) {
        for (const acc of accounts) {
            console.log(`Account: ${acc.getAccountNumber()}. ${acc.getHolderName()}.`);
            acc.applayMonthlyUpdate();
        }
    }
    banckMain() {
        const Savings = new SavingsAcoount_1.SavingsAccount("SA001", "Jack Sparrow", 5000);
        const Current = new CurrentAccount_1.CurrentAccount("CA001", "Harry Potter", 3000);
        Savings.deposit(2500);
        Savings.withdrew(1000);
        Current.deposit(1000);
        Current.withdrew(4000);
    }
}
exports.BankMain = BankMain;
//# sourceMappingURL=main.js.map