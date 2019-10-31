import React, {Component} from 'react';
import NoteSettingFontFamily from "./noteSettingFontFamily";
import NoteSettingFontStyle from "./noteSettingFontStyle";
import NoteSettingFontAlign from "./noteSettingFontAlign";

class NoteSettingStyles extends Component {
    render() {
        return (
            <div className={'NoteSettingStyles'}>
                <NoteSettingFontFamily />
                <NoteSettingFontStyle />
                <NoteSettingFontAlign />
            </div>
        );
    }
}

export default NoteSettingStyles;