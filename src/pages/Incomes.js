import React, {Component} from 'react';
import TotalIncomes from "../components/incomes/totalIncomes";

class Incomes extends Component {
    render() {
        return (
            <div className={'Incomes'}>
                <TotalIncomes />
            </div>
        );
    }
}

export default Incomes;