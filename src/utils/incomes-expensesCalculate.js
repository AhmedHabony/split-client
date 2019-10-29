export const totalIncomes_Expenses = incomes => {
    let total = 0;
    incomes.map(income => {
       return  total + parseFloat(income.value)
    });
    return total
};