import React, {Component} from 'react';
import ToDoHeader from "../components/toDo/toDo_header";
import AddToDo from "../components/toDo/addPlan";
import PlanManage from "../components/toDo/planManage";
import {addSignOpenedPath} from "../actions/signIn";
import {connect} from "react-redux";

class ToDo extends Component {
    componentDidMount() {
        const {addSignOpenedPath} = this.props
        addSignOpenedPath(this.props.match.path)
    }
    render() {
        return (
            <div className={'ToDo'}>
                <ToDoHeader />
                <AddToDo />
                <PlanManage />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addSignOpenedPath:  path => dispatch(addSignOpenedPath(path))
})
export default connect(null, mapDispatchToProps)(ToDo);