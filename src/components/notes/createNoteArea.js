import React, {Component} from 'react';
import TextareaAutosize from 'react-textarea-autosize';

class CreateNoteArea extends Component {
    render() {
        return (
            <div className={'CreateNoteArea'}>
                <TextareaAutosize
                    className={'CreateNoteArea__textArea'}
                    maxRows={9}
                    placeholder={'Start to write...'}
                />
            </div>
        );
    }
}

export default CreateNoteArea;