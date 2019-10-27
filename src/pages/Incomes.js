import React, {Component} from 'react';
import TotalIncomes from "../components/incomes/totalIncomes";
import IncomeExpenses from "../components/incomes/income-expenses";

class Incomes extends Component {
    render() {
        return (
            <div className={'IncomesPage'}>
                <TotalIncomes />
                <IncomeExpenses/>
            </div>
        );
    }
}

export default Incomes;