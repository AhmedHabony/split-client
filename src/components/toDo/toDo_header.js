import React, {Component} from 'react';

class ToDoHeader extends Component {
    render() {
        return (
            <div className={'ToDoHeader'}>
                <h1 className={'ToDoHeader__title-main'}>Welcome Ahmed, Good evening.</h1>
                <h2 className={'ToDoHeader__title-sub'}>Plan the day, Seize the moment.</h2>
            </div>
        );
    }
}

export default ToDoHeader;