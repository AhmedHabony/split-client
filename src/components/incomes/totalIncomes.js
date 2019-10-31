import React, {Component} from 'react';
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {allExpensesSelector, allIncomesSelector} from "../../utils/income-expenseSelector";
import {totalIncomes_Expenses, totalIncomes} from "../../utils/incomes-expensesCalculate";


class TotalIncomes extends Component {
    render() {
        const{allIncomes, allExpenses} =this.props;
        const total = totalIncomes_Expenses(allIncomes) - totalIncomes_Expenses(allExpenses);
        let sign ='';
        if(totalIncomes_Expenses(allIncomes) > totalIncomes_Expenses(allExpenses)) sign='+';
        else if(totalIncomes_Expenses(allIncomes) < totalIncomes_Expenses(allExpenses)) sign='-';
        return (
            <div className={'TotalIncomes'}>
                <p className={'TotalIncomes__text'}> Total Incomes</p>
                <span className={'TotalIncomes__number'}>{sign} {totalIncomes(total)} <span className={'TotalIncomes__number-sign'}>$</span></span>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    allIncomes: allIncomesSelector,
    allExpenses: allExpensesSelector

})

export default connect(mapStateToProps)(TotalIncomes);