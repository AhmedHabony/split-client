import React, {Component} from 'react';
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {allExpensesSelector, allIncomesSelector} from "../../utils/income-expenseSelector";
import {totalIncomes_Expenses} from "../../utils/incomes-expensesCalculate";


class TotalIncomes extends Component {
    render() {
        const{allIncomes, allExpenses} =this.props;
        console.log(allExpenses, allIncomes, 'this')
        const total = totalIncomes_Expenses(allIncomes) - totalIncomes_Expenses(allExpenses);
        return (
            <div className={'TotalIncomes'}>
                <p className={'TotalIncomes__text'}> Total Incomes</p>
                <span className={'TotalIncomes__number'}> {total} <span className={'TotalIncomes__number-sign'}>$</span></span>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    allIncomes: allIncomesSelector,
    allExpenses: allExpensesSelector

})

export default connect(mapStateToProps)(TotalIncomes);