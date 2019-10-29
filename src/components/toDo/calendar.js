import React, {Component} from 'react';
import DayPicker from 'react-day-picker'
import {addCalendarDate} from "../../actions/plan";

import 'react-day-picker/lib/style.css';
import {connect} from "react-redux";






class PlanCalender extends Component {

    state = {
        date: new Date()
    };

    handleOnDayClick= day => {
        const {addCalendarDate} = this.props;

        addCalendarDate(day)
    }
    render() {
        return (
            <div  >
                {/*<Calendar onClickDay={this.handleOnClickDay}  calendarType={"US"} className={'Calender'}/>*/}
                <DayPicker onDayClick={this.handleOnDayClick}  canChangeMonth={false} className={'Calender'} />
            </div>
        );
    }
}

const mapDispatchToState = dispatch => ({
    addCalendarDate: date => dispatch(addCalendarDate(date))
})
export default connect(null, mapDispatchToState) (PlanCalender);