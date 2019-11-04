import React, {Component} from 'react';
import TotalIncomes from "../components/incomes/totalIncomes";
import IncomeExpenses from "../components/incomes/income-expenses";
import {connect} from "react-redux";
import {addSignOpenedPath} from "../actions/signIn";

class Incomes extends Component {

    componentDidMount() {
        const {addSignOpenedPath} = this.props
        addSignOpenedPath(this.props.match.path)
    }

    render() {

        return (
            <div className={'IncomesPage'}>
                <TotalIncomes />
                <IncomeExpenses/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addSignOpenedPath:  path => dispatch(addSignOpenedPath(path))
})
export default connect(null, mapDispatchToProps)(Incomes);