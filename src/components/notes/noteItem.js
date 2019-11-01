import React, {Component} from 'react';
import {createNoteItemTile, noteSummery} from "../../utils/noteItemControllls";

class NoteItem extends Component {
    render() {
        const {note} = this.props;
        noteSummery(note.note);
        return (
            <div className={'NoteItem'}>
                <h1 className={'NoteItem__header'}> {createNoteItemTile(note.note)} </h1>
                <p style={{color: note.fontColor || '#fff', fontFamily: note.fontFamily}} className={'NoteItem__noteSummary'}> {noteSummery(note.note)}</p>
            </div>
        );
    }
}

export default NoteItem;