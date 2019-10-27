import React from 'react'
import ExpensesManage from "./expensesManage";
import IncomeManage from "./incomeManage";


const IncomeExpenses = (props) => {

    return (
            <div className={'Income-Expenses'}>
                <ExpensesManage/>
                <IncomeManage/>
        </div>
    )
};

export default IncomeExpenses