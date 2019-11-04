import React, {Component} from 'react';
import Welcome from "../components/home/welcome";
import Features from "../components/home/features";
import {addSignOpenedPath} from "../actions/signIn";
import {connect} from "react-redux";

class Home extends Component {
    componentDidMount() {
        const {addSignOpenedPath} = this.props
        addSignOpenedPath(this.props.match.path)
    }
    render() {
        return (
            <div className={'Home'}>
                <Welcome />
                <Features />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addSignOpenedPath:  path => dispatch(addSignOpenedPath(path))
});
export default connect(null, mapDispatchToProps)(Home);