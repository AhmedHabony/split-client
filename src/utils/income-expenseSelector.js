import {createSelector} from 'reselect'



const getIncomes = state => state.incomes;


export const allIncomesSelector = createSelector(
    [getIncomes],
    incomes => incomes.incomes
);

const getExpenses = state => state.expenses;


export const allExpensesSelector = createSelector(
    [getExpenses],
    expenses => expenses.expenses
);

