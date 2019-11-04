import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import {isEditOpened} from "../../../actions/note";
import {openedNoteSelector} from "../../../utils/noteSelectors";
import {createNoteItemTile} from "../../../utils/noteItemControllls";
import {editNote} from "../../../actions/note";

class EditNote extends Component {
    state = {
        newNote: this.props.openedNote.note
    };

    onBtnClick = async e => {
        const {closePortal, openedNote, editNote} = this.props;
        const newNote = {
            id: openedNote.id,
            note: this.state.newNote
        };
        await editNote(openedNote, newNote)
        closePortal(false)
    };
    onChange = async e =>{
        await this.setState({newNote: e.target.value});
        console.log(this.state.newNote, 'thisssssssss')
    };
    render() {
        const {openedNote} = this.props;
        return (
            <div className={'EditNote'}>
                <div className={'EditNote__details'}>
                    <h1 className={'EditNote__header'}> {createNoteItemTile(openedNote.note, 8)}</h1>
                    <textarea style={{
                        fontSize: openedNote.fontSize,
                        color: openedNote.fontColor,
                        fontFamily: openedNote.fontFamily
                    }}
                              value={this.state.newNote}
                              onChange={this.onChange}
                    />
                    <button onClick={this.onBtnClick}>Edit</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    openedNote: openedNoteSelector
});


const mapDispatchToProps = dispatch => ({
    closePortal: isEdit => dispatch(isEditOpened(isEdit)),
    editNote: (oldNote, newNote) => dispatch(editNote(oldNote, newNote))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditNote);