export const bootstrap = (): void => {
    class BankAccount {
        protected holder: string;
        protected balance: number;

        constructor(holder: string, balance: number) {
            this.holder = holder;
            this.balance = balance;
        }

        public getHolder(): string {
            return this.holder;
        }
    }

    class CheckingAccount extends BankAccount {
        private overdraftLimit: number;

        constructor(holder: string, balance: number, overdraftLimit: number) {
            super(holder, balance);
            this.overdraftLimit = overdraftLimit;
        }

        public getOverdraftLimit(): number {
            return this.overdraftLimit;
        }
    }

    class SavingsAccount extends BankAccount {
        private interestRate: number;

        constructor(holder: string, balance: number, interestRate: number) {
            super(holder, balance);
            this.interestRate = interestRate;
        }

        public getInterestRate(): number {
            return this.interestRate;
        }
    }

    // lista de contas bancárias (LSP)
    const accountList: BankAccount[] = [
        new CheckingAccount('Francisco', 2300, 5000),
        new SavingsAccount('Jose', 4300, 0.005),
        new CheckingAccount('Silvana', 5600, 2000),
        new SavingsAccount('Gomes', 7600, 0.006),
    ];

    function processAccounts(accounts: BankAccount[]): void {
        accounts.forEach((account) => {
            if (account instanceof CheckingAccount) {
                console.log(
                    'Processando a conta corrente: ',
                    account.getOverdraftLimit(),
                );
            } else if (account instanceof SavingsAccount) {
                console.log(
                    'Processando a conta poupança: ',
                    account.getInterestRate(),
                );
            }
            console.log('-------------------------');
        });
    }

    processAccounts(accountList);
};
