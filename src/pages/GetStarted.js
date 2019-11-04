import React, {Component} from 'react';
import GetStartedCard from "../components/getStarted/getStartedCard";

class GetStarted extends Component {
    render() {
        return (
            <div className={'GetStarted'}>
               <GetStartedCard />
            </div>
        );
    }
}

export default GetStarted;