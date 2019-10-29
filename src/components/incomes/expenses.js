import React, {Component} from 'react';
import IncomesExpensesManageForm from "./Incomes-Expenses_ManageForm";

class Expenses extends Component {
    render() {
        const {allExpenses} = this.props;
        return (
            <div className={'Incomes__ExpensesContainer '}>
                {
                    allExpenses.map((incExp, i) => {
                        return (
                            <div key={incExp.id}>
                                <IncomesExpensesManageForm
                                    key={i}
                                    current={incExp.value}
                                    desc={incExp.description}
                                    incExp={incExp}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Expenses;