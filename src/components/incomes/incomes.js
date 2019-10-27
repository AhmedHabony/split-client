import React, {Component} from 'react';
import IncomesForm from "./Incomes-Expenses_ManageForm";

class Incomes extends Component {
    render() {
        const {allIncomes} = this.props;
        return (
            <div className={'Incomes__ExpensesContainer'}>
                {
                    allIncomes.map((income, i) => {
                        return (
                            <div key={i}>
                                <IncomesForm Value={income.value} desc={income.description} incExp={income}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Incomes;