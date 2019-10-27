export const editIncome = (incomes, oldIncome, editedIncome) => {

    const income = incomes.find(income => {
        return income.id === oldIncome.id ;
    });
    console.log(income, 'meeeee so')
    if(income){
        oldIncome.value = editedIncome.value;
        oldIncome.description = editedIncome.description;
        oldIncome.date = editedIncome.date;
        return [...incomes]
    }

    return [...incomes]
}