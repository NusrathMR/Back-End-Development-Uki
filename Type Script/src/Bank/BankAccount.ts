export class BankAccount{
    private AccountNumber:string;
    private HolderName:string;
    protected Balance:number;

    constructor (AccountNumber:string, HolderName:string, Balance:number){
        this.AccountNumber=AccountNumber;
        this.HolderName=HolderName;
        this.Balance=Balance;
        } 

        public getAccountNumber():string{
            return this.AccountNumber;
        }

        // public setAccountNumber(AccountNumber:string):void{
        //     this.AccountNumber=AccountNumber;
        // }

        public getHolderName():string{
            return this.HolderName;
        }

        // public setHolderName(HolderName:string):void{
        //     this.HolderName=HolderName;
        // }

        public getBalance():number{
            return this.Balance;
        }

        // public setBalanace(Balance:number):void{
        //     this.Balance=Balance;
        // }

        public deposit(amount:number):void{
            if (amount<=0){
                console.log(`Deposit amount must be positive.`);
                return;
            }
            this.Balance+=amount;
            console.log(`Deposited Rs. ${amount} New Balance is Rs.${this.Balance}`)
        }

        public withdrew(amount:number):void{
            if (amount<=0){
                console.log(`Withdrewal amount must be positive`);
                return;
            }
            if (amount>this.Balance){
                console.log("Insufficient Balance");
                return;
            }
            this.Balance-=amount;
            console.log(`Witdrew Rs. ${amount}, New balance is RTCRtpScriptTransform.${this.Balance}`)
        }

        public applayMonthlyUpdate():void{
            console.log("It's standard account. No Monthly Update Rule Applied")
        }

        public SentTo():string{
            return `Account Number: ${this.AccountNumber}, Holder Name: ${this.HolderName}, Balance: ${this.Balance}`;
        }
}