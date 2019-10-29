import React, {Component} from 'react';
import {ReactComponent as Edit} from './../../assets/success.svg'
import {connect} from 'react-redux'
import Moment from "react-moment";

import uuid from 'uuid'
import {editMainFocus, editToDo} from "../../actions/plan";

class PlanItem extends Component {

    state = {
        plan: this.props.plan.plan,
        btn: ''
    }


    onValueChange = e => {
        this.setState({plan: e.target.value})
        const oldPlan = this.props.plan.plan;
        const newPlan = e.target.value;

        const btn =<Edit className={'Plan__item__form__btn-icon'}/>;
        oldPlan === newPlan ? this.setState({btn: ''}) : this.setState({btn})


    };

    handleOnSubmit = e =>{
        e.preventDefault();
        const {plan} = this.props.plan;
        const{editToDo, editMainFocus, typeName} = this.props;
        if (this.state.plan !== plan) {
            const newPlan = {
                id: uuid(),
                plan: this.state.plan
            };
            if(typeName === 'To-Do') editToDo(this.props.plan, newPlan)
            else if(typeName === 'Main Focus') editMainFocus(this.props.plan, newPlan)

        }
        this.setState({btn: ''})
    };

    render() {
        const {plan} = this.props;
        return (
            <div className={'Plan__item'}>
                <div className={'Plan__item__check'}>
                    <span>&#10004;</span>
                    <span>&#10006;</span>
                </div>
                <form className={'Plan__item__form'} onSubmit={this.handleOnSubmit}>
                    <input

                        className={'Plan__item__form__input'}
                        type={'text'}
                        onChange={this.onValueChange}
                        value={this.state.plan}
                    />
                    {/*//Brow the InputIncomesExpenses__date Class*/}
                    <span className={'Plan__item__form__date'} title={<Moment format={'DD MMM'}  date={plan.date}/>}><Moment  date={plan.date} format={'DD MMM'}  /> </span>
                    <button className={'Plan__item__form__btn'}>
                        {
                            this.state.btn
                        }
                    </button>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    editToDo: (oldPlan, newPlan) => dispatch(editToDo(oldPlan, newPlan)),
    editMainFocus: (oldPlan, newPlan) => dispatch(editMainFocus(oldPlan, newPlan))
});

export default connect(null, mapDispatchToProps)(PlanItem);