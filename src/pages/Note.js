import React, {Component} from 'react';
import AllNotes from "../components/notes/allNotes";
import CreateNote from "../components/notes/createNote";
import NoteSettings from "../components/notes/noteSettings";
import {addSignOpenedPath} from "../actions/signIn";
import {connect} from "react-redux";

class Note extends Component {

    componentDidMount() {
        const {addSignOpenedPath} = this.props;
        addSignOpenedPath(this.props.match.path)
    }


    render() {
        return (
            <div className={'Note'}>
                <AllNotes  />
                <CreateNote />
                <NoteSettings />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addSignOpenedPath:  path => dispatch(addSignOpenedPath(path))
});



export default connect(null, mapDispatchToProps)(Note);