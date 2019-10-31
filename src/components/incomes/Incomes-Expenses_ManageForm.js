import React, {Component} from 'react';
import {connect} from 'react-redux'
import uuid from 'uuid'

import {ReactComponent as Edit} from '../../assets/success.svg';
import InputIncomesExpenses from "../inputs/Input-Incomes-Expenses";
import {editincome, deleteIncome} from "../../actions/incomes";
import {deleteExpense, editExpenses} from '../../actions/expenses'
import Moment from "react-moment";

class IncomesExpensesManageForm extends Component {
    state = {
        stateValue: this.props.current,
        stateDesc: this.props.desc,
        btn: ''
    };
    handleOnChangeValue = async e => {
        this.setState({stateValue: e.target.value});

        const oldValue = this.props.current;
        const newValue = e.target.value;

        const btn = <Edit className={'InputIncomesExpenses__btn-icon'}/>;
        oldValue === newValue ? this.setState({btn: ''}) : this.setState({btn})


    };
    handleOnChangeDesc = e => {
        this.setState({stateDesc: e.target.value})

        const oldValue = this.props.desc;
        const newValue = e.target.value;

        const btn = <Edit className={'InputIncomesExpenses__btn-icon'}/>;
        oldValue === newValue ? this.setState({btn: ''}) : this.setState({btn})
    };
    handleOnSubmit = e => {
        e.preventDefault();
        const {current, desc, incExp, editincome, editExpenses} = this.props;
        const {stateValue, stateDesc} = this.state;


        if (stateValue !== current || stateDesc !== desc) {
            const editedIncome = {
                id: uuid(),
                // date: Date.now(),
                value: stateValue,
                description: stateDesc
            };
            if (incExp.type === 'income') editincome(incExp, editedIncome);
            else if (incExp.type === 'expense') editExpenses(incExp, editedIncome)

        }
        this.setState({btn: ''})

    };

    handleCheckDelete = e => {
        const {incExp, deleteIncome, deleteExpense} = this.props;
        if (incExp.type === 'income') deleteIncome(incExp)
        else if (incExp.type === 'expense') deleteExpense(incExp)

    }

    render() {
        const {incExp} = this.props;
        const {date} = incExp;
        return (
            <div className={'InputIncomesExpenses__container'}>
                    <span className={'InputIncomesExpenses__check'} onClick={this.handleCheckDelete}>
                         <span
                             className={'InputIncomesExpenses__check-delete'}
                             onClick={this.handleOnDeleteClick}

                         >&#10006;</span>
                    </span>

                <form className={'InputIncomesExpenses'} onSubmit={this.handleOnSubmit}>
                    <InputIncomesExpenses
                        name={'income'}
                        handleOnChange={this.handleOnChangeValue}
                        value={this.state.stateValue}
                        type={'number'}
                    />
                    <InputIncomesExpenses
                        name={'desc'}
                        handleOnChange={this.handleOnChangeDesc}
                        value={this.state.stateDesc}
                        type={'text'}
                    />
                    <span className={'InputIncomesExpenses__date'} title={<Moment date={date}/>}><Moment date={date} format={'DD MMM'}/> </span>

                    <button className={'InputIncomesExpenses__btn'}>
                        {this.state.btn}
                    </button>
                </form>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => ({
    editincome: (oldIncome, editedIncome) => dispatch(editincome(oldIncome, editedIncome)),
    deleteIncome: income => dispatch(deleteIncome(income)),
    deleteExpense: expense => dispatch(deleteExpense(expense)),
    editExpenses: (oldExpense, newExpense) => dispatch(editExpenses(oldExpense, newExpense)),

})
export default connect(null, mapDispatchToProps)(IncomesExpensesManageForm);