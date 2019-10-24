import React, {Component} from 'react';
import Welcome from "../components/home/welcome";
import Features from "../components/home/features";

class Home extends Component {
    render() {
        return (
            <div className={'Home'}>
                <Welcome />
                <Features/>
            </div>
        );
    }
}

export default Home;