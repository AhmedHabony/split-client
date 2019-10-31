import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTime} from "../../actions/plan";
import {controlTime} from "../../utils/controlTime";

class Time extends Component {
    state = {
        hour: new Date().getHours(),
        minute: new Date().getMinutes()
    };

    componentDidMount() {
        this.interval = setInterval(() => this.setState({minute: new Date().getMinutes()}), 1000  * 60);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleTimeChange =  e => {
        const hour = e.target.value.split(':')[0] * 1;
        const minute = e.target.value.split(':')[1] * 1;
        const{addTime} = this.props;
        addTime(`${hour}:${minute}`);
        this.setState({hour, minute});
    };

    render() {
        return (
            <div className={'Time'}>
                <input
                    className={'Time__input Time__input-time '}
                    type={'time'}
                    value={controlTime(this.state.hour, this.state.minute)}
                    onChange={this.handleTimeChange}
                />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addTime: PlaTime => dispatch(addTime(PlaTime))
});

export default connect(null, mapDispatchToProps)(Time);