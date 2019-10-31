import React, {Component} from 'react';
import InputAddNew from "../inputs/Input-AddNew";
import Expenses from "./expenses";
import {addNewExpenses} from './../../actions/expenses'
import {connect} from "react-redux";
import uuid from "uuid";
import {createStructuredSelector} from "reselect";
import {allExpensesSelector} from "../../utils/income-expenseSelector";
import {totalIncomes_Expenses, totalIncomes} from "../../utils/incomes-expensesCalculate";

class ExpensesManage extends Component {

    state = {
        expense: '',
        description: ''
    };
    handleOnSubmit = async (e) => {
        e.preventDefault()
        const {addNewExpense} = this.props
        const {expense, description} = this.state;
        const newExpense = {
            id: uuid(),
            date: Date.now(),
            value: expense,
            type:'expense',
            description
        };
        await addNewExpense(newExpense);
        this.setState({expense: '', description: ''})

    };
    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    };

    render() {
        const {allExpenses} = this.props;
        return (
            <div className={'ExpensesManage'}>
                <div className={'Income-Expenses__allExpenses'}>
                    <p className={'Income-Expenses__allExpenses-text'}>Expenses</p>
                    <span className={'Income-Expenses__allExpenses-number'}>- {totalIncomes(totalIncomes_Expenses(allExpenses))} <span
                        className={'TotalIncomes__number-sign'}>$</span></span>
                </div>
                <form className={'AddForm'} onSubmit={this.handleOnSubmit}>
                    <InputAddNew
                        name={'expense'}
                        step={'0.01'}
                        min={0} type={'number'}
                        placeholder={`New Expense`}
                        handleChange={this.handleChange}
                        value={this.state.expense}
                        required
                    />
                    <InputAddNew
                        name={'description'}
                        type={'text'}
                        placeholder={`Add Description`}
                        handleChange={this.handleChange}
                        value={this.state.description}

                    />

                    <button className={'AddForm__btn'}> Add</button>
                </form>
                <Expenses allExpenses={allExpenses}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addNewExpense: expense => dispatch(addNewExpenses(expense))
});

const mapStateToProps = createStructuredSelector(
    {
        allExpenses: allExpensesSelector
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesManage);