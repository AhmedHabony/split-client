import React, {Component} from 'react';

class NoteSettingFontStyle extends Component {

    style = {
        fontSize: '',
        fontStyle: ''
    };
    onSizeChange = e => {
        this.setState({fontSize: e.target.value})
    };
    onSizeStyle = e => {
        this.setState({fontStyle: e.target.value})
    };
    render() {
        return (
            <div className={'NoteSettingFontStyle'}>

                <select onChange={this.onSizeChange}  className={'NoteSettingFontStyle__select NoteSettingFontStyle__select__size'}>
                    <option value={'11'}>11</option>
                    <option value={'12'}>12</option>
                    <option value={'14'}>14</option>
                    <option value={'16'}>16</option>
                    <option value={'18'}>18</option>
                    <option value={'20'}>20</option>
                    <option value={'22'}>22</option>
                    <option value={'24'}>24</option>
                    <option value={'26'}>26</option>
                    <option value={'28'}>28</option>
                    <option value={'36'}>36</option>
                    <option value={'48'}>48</option>
                    <option value={'72'}>72</option>
                </select>

                <select onChange={this.onSizeStyle} className={'NoteSettingFontStyle__select NoteSettingFontStyle__select__style'}>
                    <option style={{fontStyle: 'normal'}} value={'normal'}>Regular</option>
                    <option style={{fontStyle: 'italic'}} value={'italic'}>Italic</option>
                    <option style={{fontStyle: 'oblique'}} value={'oblique'}>Oblique</option>
                    <option style={{fontWeight: 'bold'}} value={'bold'}>Bold</option>
                    <option style={{fontWeight: 'light'}} value={'light'}>Light </option>
                </select>
            </div>
        );
    }
}

export default NoteSettingFontStyle;