import React, {Component} from 'react';
import {connect} from 'react-redux'

import {createNoteItemTile, noteSummery} from "../../utils/noteItemControllls";
import {
    openNote,
    addNoteText,
    addFontAlign,
    addFontColor,
    addFontFamily,
    addFontSize,
    addFontStyle,
    isNoteOpened, isEditOpened, isDeleteOpened
} from "../../actions/note";

import {ReactComponent as Open} from './../../assets/openNote.svg'
import {ReactComponent as Edit} from './../../assets/editNote.svg'
import {ReactComponent as Delete} from './../../assets/garbage.svg'


class NoteItem extends Component {

    state = {
        display: 'none',
        show: false,

    };
    onNotesItemEnter = async e => {
        await this.setState(prevState => ({
            show: !prevState.show
        }));
    };
    onPopupLeave = async e => {
        await this.setState(prevState => ({
            show: !prevState.show
        }));

    };

    onOptionClick = async e => {
        const {isNoteOpened, note, openedNote, isEditOpened, isDelete} = this.props;
        if (e.target.id === 'openNote'){
            isNoteOpened(true);
            openedNote(note)
        } else if (e.target.id === 'editNote'){
            isEditOpened(true);
            openedNote(note)
        } else if (e.target.id === 'deleteNote') {
            isDelete(true);
            console.log('clicked')
            openedNote(note);
        }


    };

    render() {
        const {note} = this.props;
        return (
            <div className={'NoteItem__container'}>
                <div className={'NoteItem'} onMouseEnter={this.onNotesItemEnter}>
                    <h1 className={'NoteItem__header'}> {createNoteItemTile(note.note)} </h1>
                    <p style={{color: note.fontColor || '#fff', fontFamily: note.fontFamily}}
                       className={'NoteItem__noteSummary'}> {noteSummery(note.note)}</p>
                </div>
                <span
                    style={{display: this.state.show ? 'block' : 'none'}}
                    onMouseLeave={this.onPopupLeave}
                    className={'NoteItem-popup'}>
                   <div className={'NoteItem-popup__container'}>
                       <span onClick={this.onOptionClick} className={'NoteItem-popup__container-prop'}>
                           <Open id="openNote" className={'NoteItem-popup__container-prop-icon'}/>
                           <span id={'openNote'}> Open </span>
                       </span>

                       <span id="editNote" onClick={this.onOptionClick} className={'NoteItem-popup__container-prop'}>
                           <Edit id="editNote" className={'NoteItem-popup__container-prop-icon'}/>
                           <span id="editNote"> Edit </span>
                       </span>

                       <span id="deleteNote" onClick={this.onOptionClick} className={'NoteItem-popup__container-prop'}>
                           <Delete id="deleteNote" className={'NoteItem-popup__container-prop-icon'}/>
                           <span id="deleteNote"> Delete </span>
                       </span>


                   </div>
                </span>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    openedNote: note => dispatch(openNote(note)),
    addNoteText: text => dispatch(addNoteText(text)),
    addFontAlign: align => dispatch(addFontAlign(align)),
    addFontColor: color => dispatch(addFontColor(color)),
    addFontFamily: family => dispatch(addFontFamily(family)),
    addFontSize: size => dispatch(addFontSize(size)),
    addFontStyle: style => dispatch(addFontStyle(style)),
    isNoteOpened: isOpen => dispatch(isNoteOpened(isOpen)),
    isEditOpened: isEdit => dispatch(isEditOpened(isEdit)),
    isDelete: isDelete => dispatch(isDeleteOpened(isDelete))

});
export default connect(null, mapDispatchToProps)(NoteItem);