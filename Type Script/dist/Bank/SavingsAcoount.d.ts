import { BankAccount } from "./BankAccount";
export declare class SavingsAccount extends BankAccount {
    private static minBalance;
    private static readonly interestrate;
    constructor(AccountNumber: string, HolderName: string, Balance: number);
    withdrew(amount: number): void;
    applayMonthlyUpdate(): void;
}
//# sourceMappingURL=SavingsAcoount.d.ts.map