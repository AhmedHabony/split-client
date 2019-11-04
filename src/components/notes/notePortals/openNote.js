import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {isNoteOpened} from "../../../actions/note";
import {openedNoteSelector} from "../../../utils/noteSelectors";
import {createNoteItemTile} from "../../../utils/noteItemControllls";

class OpenNote extends Component {

    onBtnClick = e => {
        const {closePortal} = this.props;
        closePortal(false)
    };

    render() {
        const {openedNote} = this.props;
        return (
            <div className={'OpenNote'}>
                <div className={'OpenNote__details'}>
                    <h1 className={'OpenNote__header'}> {createNoteItemTile(openedNote.note, 8)}</h1>
                    <p style={{fontSize: openedNote.fontSize, color:  openedNote.fontColor, fontFamily: openedNote.fontFamily}}> {openedNote.note} </p>
                    <button onClick={this.onBtnClick}>Close</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    openedNote: openedNoteSelector
});


const mapDispatchToProps = dispatch => ({
    closePortal: isOpen => dispatch(isNoteOpened(isOpen))
});
export default connect(mapStateToProps, mapDispatchToProps)(OpenNote);