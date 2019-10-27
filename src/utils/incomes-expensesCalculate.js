export const totalIncomes_Expenses = incomes => {
    let total = 0;
    incomes.map(income => {
        total = total + parseFloat(income.value)
    });
    return total
};