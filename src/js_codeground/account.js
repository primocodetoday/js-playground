const account = {
  name: 'Sebastian',
  incomes: [],
  expenses: [],
  addExpense(name, amount) {
    this.expenses.push({ name, amount });
  },
  addIncome(name, amount) {
    this.incomes.push({ name, amount });
  },
  getAccountSummary() {
    let totalExp = 0;
    let totalInc = 0;

    this.expenses.forEach((expense) => {
      totalExp += expense.amount;
    });
    this.incomes.forEach((income) => {
      totalInc += income.amount;
    });
    return `${this.name} have total ${totalInc - totalExp}$ balance`;
  },
};

account.addExpense('Car', 500);
account.addExpense('Rent', 400);
account.addIncome('Job', 1100);
console.log(account);
console.log(account.getAccountSummary());
