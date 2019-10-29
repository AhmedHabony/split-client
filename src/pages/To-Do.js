import React, {Component} from 'react';
import ToDoHeader from "../components/toDo/toDo_header";
import AddToDo from "../components/toDo/addPlan";
import PlanManage from "../components/toDo/planManage";

class ToDo extends Component {
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

export default ToDo;