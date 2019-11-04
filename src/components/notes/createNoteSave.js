import React, {Component} from 'react';
import {addNewNote} from "../../actions/note";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import uuid from 'uuid'
import {
    fontAlignSelector,
    fontColorSelector,
    fontFamilySelector,
    fontSizeSelector,
    fontStyleSelector, noteTextSelector
} from "../../utils/noteSelectors";

class CreateNoteSave extends Component {


    handleOnClick = e => {
        const {fontFamily, fontSize, fontStyle, fontAlign, fontColor, text, addNewNote} = this.props
        if (text.length === 0) return;
        const note = {
            id: uuid(),
            note: text,
            fontFamily,
            fontSize,
            fontStyle,
            fontAlign,
            fontColor
        };
        addNewNote(note);
        console.log('saved')
    };

    render() {
        return (
            <div className={'CreateNoteSave'}>
                <button
                    className={'CreateNoteSave__saveBtn'}
                    onClick={this.handleOnClick}
                > Save Note
                </button>

            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    fontFamily: fontFamilySelector,
    fontSize: fontSizeSelector,
    fontStyle: fontStyleSelector,
    fontAlign: fontAlignSelector,
    fontColor: fontColorSelector,
    text: noteTextSelector
});
const mapDispatchToProps = dispatch => ({
    addNewNote: note => dispatch(addNewNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNoteSave);