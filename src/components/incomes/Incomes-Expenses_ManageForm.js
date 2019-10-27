import React, {Component} from 'react';
import {connect} from 'react-redux'
import uuid from 'uuid'

import {ReactComponent as Edit} from '../../assets/success.svg'
import InputIncomesExpenses from "../inputs/Input-Incomes-Expenses";
import {editIncome} from "../../actions/incomes";
import Moment from "react-moment";

class IncomesExpenses_ManageForm extends Component {
    state = {
        stateValue: this.props.Value,
        stateDesc: this.props.desc,
        btn: ''
    }
    handleOnChangeValue = async e => {
        this.setState({stateValue: e.target.value})

        const oldValue = this.props.Value;
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
        e.preventDefault()
        const {Value, desc, incExp, editIncome} = this.props;
        const {stateValue, stateDesc} = this.state


        if (stateValue !== Value || stateDesc !== desc) {
            const editedIncome = {
                id: uuid(),
                // date: Date.now(),
                value: stateValue,
                description: stateDesc
            };
            editIncome(incExp, editedIncome)
        }
        this.setState({btn: ''})

    };

    handleOnFocus = e => {

    }

    render() {
        const {type, incExp,  ...otherProps} = this.props;
        const {date} = incExp;
        return (
            <>
                <form className={'InputIncomesExpenses'} onSubmit={this.handleOnSubmit}>
                    <InputIncomesExpenses
                        name={'income'}
                        handleOnChange={this.handleOnChangeValue}
                        value={this.state.stateValue}
                        type={'number'}
                        {...otherProps}

                    />
                    <InputIncomesExpenses
                        name={'desc'}
                        handleOnChange={this.handleOnChangeDesc}
                        value={this.state.stateDesc}
                        handleOnFocus={this.handleOnFocus}
                        type={'text'}

                        {...otherProps}
                    />
                    <span className={'InputIncomesExpenses__date'} title={<Moment date={date}/>}><Moment  date={date} format={'DD MMM'}  /> </span>
                    <button className={'InputIncomesExpenses__btn'}>
                        {this.state.btn}
                    </button>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    editIncome: (oldIncome, editedIncome) => dispatch(editIncome(oldIncome, editedIncome))
})
export default connect(null, mapDispatchToProps)(IncomesExpenses_ManageForm);