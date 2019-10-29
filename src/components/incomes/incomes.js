import React, {Component} from 'react';
import IncomesExpensesManageForm from "./Incomes-Expenses_ManageForm";

class Incomes extends Component {
    render() {
        const {allIncomes} = this.props;
        return (
            <div className={'Incomes__ExpensesContainer'}>
                {
                    allIncomes.map((incExp, i) => {
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

export default Incomes;