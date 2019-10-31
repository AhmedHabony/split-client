import React, {Component} from 'react';
import AllNotes from "../components/notes/allNotes";
import CreateNote from "../components/notes/createNote";
import NoteSettings from "../components/notes/noteSettings";

class Note extends Component {
    render() {
        return (
            <div className={'Note'}>
                <AllNotes />
                <CreateNote />
                <NoteSettings />
            </div>
        );
    }
}

export default Note;