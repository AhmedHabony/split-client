import React, {Component} from 'react';
import {ReactComponent as Edit} from './../../assets/success.svg'
import {connect} from 'react-redux'
import Moment from "react-moment";

import uuid from 'uuid'
import {deleteMainFocus, deleteToDo, editMainFocus, editToDo} from "../../actions/plan";

class PlanItem extends Component {

    state = {
        plan: this.props.plan.plan,
        btn: '',
        doneClicked: false,
        closeClicked: false
    };


    onValueChange = e => {
        this.setState({plan: e.target.value});
        const oldPlan = this.props.plan.plan;
        const newPlan = e.target.value;


        const btn = <Edit className={'Plan__item__form__btn-icon'}/>;
        oldPlan === newPlan ? this.setState({btn: ''}) : this.setState({btn})


    };

    handleOnSubmit = e => {
        e.preventDefault();
        const {plan} = this.props.plan;
        const {editToDo, editMainFocus, typeName, deleteToDo, deleteMainFocus} = this.props;
        if (this.state.plan !== plan) {
            const newPlan = {
                id: uuid(),
                plan: this.state.plan
            };
            if (typeName === 'To-Do') {
                if (this.state.plan.length === 0) deleteToDo(this.props.plan);
                editToDo(this.props.plan, newPlan);
            } else if (typeName === 'Main Focus') {
                if (this.state.plan.length === 0) deleteMainFocus(this.props.plan);
                editMainFocus(this.props.plan, newPlan);
            }
        }
        this.setState({btn: ''})
    }


    handleOnDoneClick = async e => {
        await this.setState(prevState => ({
            doneClicked: !prevState.doneClicked
        }));
    };
    handleOnDeleteClick = e => {
        const {plan, deleteToDo, deleteMainFocus, typeName} = this.props;
        if (typeName === 'To-Do') deleteToDo(plan);
        else if (typeName === 'Main Focus') deleteMainFocus(plan)

    };


    render() {
        const {plan} = this.props;
        return (
            <div className={'Plan__item'}>
                <div className={'Plan__item__check'}>
                    <span
                        className={`${this.state.doneClicked ? 'Plan__item__check__done-clicked' : ''} Plan__item__check-s Plan__item__check-s1`}
                        onClick={this.handleOnDoneClick}
                    >&#10004;
                    </span>
                    <span
                        className={`Plan__item__check-s Plan__item__check-s2`}
                        onClick={this.handleOnDeleteClick}
                    >&#10006;
                    </span>
                </div>
                <form className={'Plan__item__form'} onSubmit={this.handleOnSubmit}>
                    <input

                        className={`${this.state.doneClicked ? 'Plan__item__form__input-done' : ''} Plan__item__form__input`}
                        type={'text'}
                        onChange={this.onValueChange}
                        value={this.state.plan}
                    />
                    {/*//Brow the InputIncomesExpenses__date Class*/}
                    <span className={'Plan__item__form__date'}>
                        <Moment date={plan.date} format={'DD MMM'}/>
                    </span>
                     <span className={'Plan__item__form__time'}>
                         {
                             plan.planTime ? plan.planTime : ''
                         }
                    </span>

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
    editMainFocus: (oldPlan, newPlan) => dispatch(editMainFocus(oldPlan, newPlan)),
    deleteToDo: deletedPlan => dispatch(deleteToDo(deletedPlan)),
    deleteMainFocus: deletedPlan => dispatch(deleteMainFocus(deletedPlan))
});


export default connect(null, mapDispatchToProps)(PlanItem);