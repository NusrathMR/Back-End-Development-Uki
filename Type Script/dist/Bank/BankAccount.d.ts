export declare class BankAccount {
    private AccountNumber;
    private HolderName;
    protected Balance: number;
    constructor(AccountNumber: string, HolderName: string, Balance: number);
    getAccountNumber(): string;
    getHolderName(): string;
    getBalance(): number;
    deposit(amount: number): void;
    withdrew(amount: number): void;
    applayMonthlyUpdate(): void;
    SentTo(): string;
}
//# sourceMappingURL=BankAccount.d.ts.map