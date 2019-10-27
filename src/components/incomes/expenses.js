import React, {Component} from 'react';
import Incomes_ManageForm from "./Incomes-Expenses_ManageForm";

class Expenses extends Component {
    render() {
        const {allExpenses} = this.props;
        return (
            <div className={'Incomes__ExpensesContainer '}>
                {
                    allExpenses.map((incExp, i) => {
                        return (
                            <div key={incExp.id}>

                                <Incomes_ManageForm Value={incExp.value} desc={incExp.description} incExp={incExp}/>

                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Expenses;