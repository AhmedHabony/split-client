export const totalIncomes_Expenses = incomes => {
    let total = 0;

    incomes.map(income => {
        total=  total + parseFloat(income.value);
        return 1;
    });
    return  total
};

export const totalIncomes = total => {
    // let int =

    let numSplit, int, dec;

    total = Math.abs(total);
    total = total.toFixed(2);

    numSplit =  total.split('.');
    int = numSplit[0];
    dec = numSplit[1];
    if (int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
    }

    return `${int}.${dec}`



}