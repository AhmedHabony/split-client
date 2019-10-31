import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import uuid from 'uuid'

import {totalIncomes_Expenses, totalIncomes} from "../../utils/incomes-expensesCalculate";
import InputAddNew from "../inputs/Input-AddNew";
import {addNewIncome} from "../../actions/incomes";
import Incomes from "./incomes";
import {allIncomesSelector} from "../../utils/income-expenseSelector";


class IncomeManage extends Component {


    state = {
        income: '',
        description: ''
    };
    handleOnSubmit = async e => {
        e.preventDefault();
        const {addNewIncome} = this.props;
        const {income, description} = this.state;
        const newIncome = {
            id: uuid(),
            date: Date.now(),
            type: 'income',
            value: income,
            description
        };
        await addNewIncome(newIncome);
        this.setState({income: '', description: ''})

    };
    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    };

    render() {
        const {allIncomes} = this.props;
        return (
            <div className={'IncomeManage'}>
                <div className={'Income-Expenses__allExpenses'}>
                    <p className={'Income-Expenses__allExpenses-text'}>Incomes</p>
                    <span className={'Income-Expenses__allExpenses-number'}>+ {totalIncomes(totalIncomes_Expenses(allIncomes))}<span
                        className={'TotalIncomes__number-sign'}>$</span></span>
                </div>
                <form className={'AddForm'} onSubmit={this.handleOnSubmit}>
                    <InputAddNew
                        name={'income'}
                        step={'0.01'}
                        min={0}
                        type={'number'}
                        placeholder={`New Income`}
                        handleChange={this.handleChange}
                        value={this.state.income}
                        required
                    />
                    <InputAddNew
                        name={'description'}
                        type={'text'}
                        placeholder={`Add Description`}
                        value={this.state.description}
                        handleChange={this.handleChange}
                        autoFocus={false}
                    />
                    <button className={'AddForm__btn'}> Add</button>
                </form>
                <Incomes allIncomes={allIncomes} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        addNewIncome: (income) => dispatch(addNewIncome(income))
    }
);

const mapStateToProps = createStructuredSelector(
    {
        allIncomes: allIncomesSelector
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(IncomeManage);