import { BankAccount } from "./BankAccount";
export declare class CurrentAccount extends BankAccount {
    private static readonly OdLimit;
    constructor(AccountNumber: string, HolderName: string, Balance: number);
    withdrew(amount: number): void;
    applayMonthlyUpdate(): void;
}
//# sourceMappingURL=CurrentAccount.d.ts.map