import React from 'react'
import {connect} from 'react-redux'
import {planType} from "../../actions/plan";

class PlanTypesPopup extends React.Component {


    handleOnClick = e => {
        const{title} =e.target;
        const{planType} = this.props;
        planType(title)
    };
    render() {
        return (
            <div className={'PlanTypesPopup'}>
                <button title={'toDo'} type={'toDo'} onClick={this.handleOnClick}  className={'PlanTypesPopup-btn'}>To-Do</button>
                <button title={'main-focus'} onClick={this.handleOnClick} className={'PlanTypesPopup-btn'}>Main-Focus</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    planType: type => dispatch(planType(type))
});

export default connect(null, mapDispatchToProps)(PlanTypesPopup)