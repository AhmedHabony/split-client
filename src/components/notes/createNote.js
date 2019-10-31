import React, {Component} from 'react';
import CreateNoteHeader from "./createNoteHeader";
import CreateNoteArea from "./createNoteArea";
import CreateNoteSave from "./createNoteSave";

class CreateNote extends Component {
    render() {
        return (
            <div className={'CreateNote'}>
                <CreateNoteHeader/>
                <CreateNoteArea />
                <CreateNoteSave />
            </div>
        );
    }
}

export default CreateNote;