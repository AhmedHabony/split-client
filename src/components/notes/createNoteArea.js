import React, {Component} from 'react';
import {createStructuredSelector} from "reselect";

import {
    fontAlignSelector,
    fontColorSelector,
    fontFamilySelector,
    fontSizeSelector,
    fontStyleSelector,
    noteTextSelector,
    openedNoteSelector
} from './../../utils/noteSelectors'
import {addNoteText} from "../../actions/note";
import {connect} from "react-redux";

class CreateNoteArea extends Component {

    state ={
        nodeText:  this.props.text
    };
    handleOnChange = async e => {
        await this.setState({nodeText: e.target.value});
        const {addNoteText } = this.props;
        addNoteText(this.state.nodeText)
    };
    render() {
        const {fontFamily, fontSize, fontStyle, fontAlign, fontColor } =this.props;
        let text_align = '';
        let font_Size= '2.3rem';
        if(fontAlign) text_align = fontAlign.fontTextAlign;
        if(fontSize) font_Size = `${fontSize}rem`;

        console.log(this.props.openedNote.note);
        return (
            <div className={'CreateNoteArea'}>
                <textarea
                    className={'CreateNoteArea__textArea'}
                    placeholder={'Start to write...'}
                    value={this.state.nodeText}
                    onChange={this.handleOnChange}
                    style={{
                        fontFamily: fontFamily,
                        fontSize: font_Size,
                        fontStyle:  fontStyle,
                        fontWeight: fontStyle,
                        color: fontColor,
                        textAlign: text_align
                    }}
                />
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
    text: noteTextSelector,
    openedNote: openedNoteSelector
});

const mapDispatchToProps = dispatch => ({
    addNoteText: text => dispatch(addNoteText(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateNoteArea);