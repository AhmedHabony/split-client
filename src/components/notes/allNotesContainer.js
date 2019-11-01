import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import uuid from 'uuid'
import {notesSelector} from "../../utils/noteSelectors";
import NoteItem from "./noteItem";


class AllNotesContainer extends Component {
    render() {
        const {notes} = this.props;
        console.log(notes);
        let newNotesArray = [];
        for (let i=notes.length-1 ; i >= 0 ; i --){
            newNotesArray.push(notes[i])
        }
        console.log(newNotesArray)
        return (
            <div className={'AllNotesContainer'}>
                {
                    newNotesArray.map(note  => {
                       return <NoteItem key={uuid()} note={note} />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    notes: notesSelector
});
export default connect(mapStateToProps)(AllNotesContainer);