import React, {Component} from 'react';
import Plan from "./plan";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getAllMainFocus, getAllToDos, getAllWishes} from "../../utils/planSelectors";

class PlanManage extends Component {
    render() {
        const {toDos, mainFocus, } = this.props
        return (
            <div className={'PlanManage'}>
                {/*<Plan plans={toDos} type={'toDo'}/>*/}
                <Plan plans={toDos} type={'toDo'}/>
                <Plan plans={mainFocus} type={'mainFocus'}/>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    toDos: getAllToDos,
    mainFocus: getAllMainFocus,
    wishes: getAllWishes
})
export default connect(mapStateToProps)(PlanManage);