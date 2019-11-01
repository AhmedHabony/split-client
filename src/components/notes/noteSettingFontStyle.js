import React, {Component} from 'react';

import {addFontSize, addFontStyle} from "../../actions/note";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {fontSizeSelector, fontStyleSelector} from "../../utils/noteSelectors";

class NoteSettingFontStyle extends Component {

    style = {
        fontSize: '',
        fontStyle: ''
    };
    onSizeChange = async e => {
        await this.setState({fontSize: e.target.value});
        const {addFontSize} = this.props;
        addFontSize(this.state.fontSize)
    };
    onStyleChange = async e => {
        await this.setState({fontStyle: e.target.value});
        const {addFontStyle} = this.props;
        addFontStyle(this.state.fontStyle)

    };
    render() {
        const {fontSize, fontStyle} = this.props;
        return (
            <div className={'NoteSettingFontStyle'}>
                <select defaultValue={fontSize} onChange={this.onSizeChange}  className={'NoteSettingFontStyle__select NoteSettingFontStyle__select__size'}>
                    <option value={'1.8'}>18</option>
                    <option value={'2'}>20</option>
                    <option value={'2.2'}>22</option>
                    <option value={'2.4'}>24</option>
                    <option  value={'2.6'}>26</option>
                    <option value={'2.8'}>28</option>
                    <option value={'3.6'}>36</option>
                    <option value={'4.8'}>48</option>
                    <option value={'7.8'}>78</option>

                </select>

                <select defaultValue={fontStyle} onChange={this.onStyleChange} className={'NoteSettingFontStyle__select NoteSettingFontStyle__select__style'}>
                    <option style={{fontStyle: 'normal'}} value={'normal'}>Regular</option>
                    <option style={{fontStyle: 'italic'}} value={'italic'}>Italic</option>
                    <option style={{fontStyle: 'oblique'}} value={'oblique'}>Oblique</option>
                    <option style={{fontWeight: 'bold'}} value={'bold'}>Bold</option>
                    <option style={{fontWeight: 'light'}} value={'100'}>Light </option>
                </select>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>({
    addFontSize: fontSize => dispatch(addFontSize(fontSize)),
    addFontStyle: fontStyle => dispatch(addFontStyle(fontStyle))

});
const mapStateToProps = createStructuredSelector({
    fontSize: fontSizeSelector,
    fontStyle: fontStyleSelector
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteSettingFontStyle);