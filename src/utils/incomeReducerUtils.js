export const addNewIncome_expense =  (incomes_expenses, newIncome_Expense) =>{
    const exist = incomes_expenses.find(
        income_expense =>income_expense.id === newIncome_Expense.id
    );

    if(exist) {
        return incomes_expenses.map(income_expense => {
            return income_expense.id === newIncome_Expense.id ? {...incomes_expenses} : income_expense
        })
    }

    return [...incomes_expenses, {newIncome_Expense}]
};