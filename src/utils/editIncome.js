export const editincome = (incomes, oldIncome, editedIncome) => {

    const income = incomes.find(income => {
        return income.id === oldIncome.id ;
    });
    if(income){
        oldIncome.value = editedIncome.value;
        oldIncome.description = editedIncome.description;
        oldIncome.date = editedIncome.date;
        return [...incomes]
    }

    return [...incomes]
}