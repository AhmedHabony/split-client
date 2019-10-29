import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import uuid from 'uuid'


import {getCalendarDate, planTypeSelector} from "../../utils/planSelectors";
import {ReactComponent as Menu} from './../../assets/menu.svg'
import {ReactComponent as DateIcon} from './../../assets/date.svg'
import PlanTypesPopup from "./planTypesPopup";
import PlanCalender from './calendar'
import {addToToDo, addToMAinFocus, addToToWishes} from './../../actions/plan'


class AddPlan extends Component {
    state = {
        typesPopup: false,
        calenderPopup: false,
        inputValue: '',
        planType: this.props.type
    };
    handleTypesIconClick = (e) => {
        if (!this.state.typesPopup) {
            document.addEventListener('click', this.handleTypesClickOutside, false)
        } else {
            document.removeEventListener('click', this.handleTypesClickOutside, false)
        }

        this.setState(prevState => ({
            typesPopup: !prevState.typesPopup
        }));
        this.setState({calenderPopup: false})

    };
    handleTypesClickOutside = (e) => {
        if (this.node.contains(e.target)) return
        this.handleTypesIconClick();
    };

    handleBtnOnChange = e => {
        const {value} = e.target;
        this.setState({inputValue: value})
    };
    handleDateIconClick = e => {
        if (!this.state.calenderPopup) {
            document.addEventListener('click', this.handleDateIconClickOutSide, false)
        } else {
            document.removeEventListener('click', this.handleDateIconClickOutSide, false)
        }
        this.setState(prevState => ({
            calenderPopup: !prevState.calenderPopup
        }))

    };
    handleDateIconClickOutSide = e => {
        if (this.node.contains(e.target)) return;
        this.handleDateIconClick();

    };

    handleOnSubmit = e =>{
        e.preventDefault();
        const {inputValue} = this.state;
        const {type, addToToDo, addToMAinFocus, addToToWishes, calendarDate} = this.props;
        const APlan = {
            id: uuid(),
            date: Date.now() >= calendarDate ? Date.now() : calendarDate,
            plan: inputValue
        };

        if (type === 'toDo') addToToDo(APlan);
        else if (type === 'main-focus') addToMAinFocus(APlan);
        else if (type === 'wishes') addToToWishes(APlan)


    };
    render() {
        const {type} = this.props;
        let placeHolder = '';
        if (type === 'toDo') placeHolder = 'Add to To-Do';
        if (type === 'wishes') placeHolder = 'Add to Wishes';
        if (type === 'main-focus') placeHolder = 'Add to Main Focus';
        return (
            <div>
                <div className={'AddToDo'}>
                    <div className={'AddToDo__date'}>
                        <DateIcon onClick={this.handleDateIconClick} className={'AddToDo__date-icon'}/>
                        <div ref={node => {
                            this.node = node;
                        }}>
                            {
                                this.state.calenderPopup ? <PlanCalender view={'month'}/> : ''
                            }
                        </div>

                    </div>
                    <div>
                        <div ref={node => {
                            this.node = node;
                        }} className={'AddToDo__type'} onClick={this.handleTypesIconClick}>
                            <Menu className={'AddToDo__type-icon'}/>

                            {
                                this.state.typesPopup ? <PlanTypesPopup/> : ''
                            }
                        </div>
                    </div>
                    <form className={'AddToDo__form'} onSubmit={this.handleOnSubmit}>
                        <input
                            className={'AddToDo__form-input'}
                            onChange={this.handleBtnOnChange}
                            type={'text'}
                            placeholder={placeHolder}
                            value={this.state.inputValue}
                        />
                        <button className={'AddToDo__form-btn'}>Add</button>
                    </form>
                </div>

            </div>

        );
    }
}

const mapStateToProps = createStructuredSelector({
    type: planTypeSelector,
    calendarDate: getCalendarDate
});
const mapDispatchToProps = dispatch => ({
    addToToDo: toDo => dispatch(addToToDo(toDo)),
    addToMAinFocus: mainFocus => dispatch(addToMAinFocus(mainFocus)),
    addToToWishes: wish => dispatch(addToToWishes(wish))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPlan);