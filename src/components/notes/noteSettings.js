import React, {Component} from 'react';
import NoteSettingHeader from "./noteSettingHeader";
import NoteSettingStyles from "./noteSettingStyles";
import NoteSettingColor from "./noteSettingColor";

class NoteSettings extends Component {
    render() {
        return (
            <div className={'NoteSettings'}>
                <NoteSettingHeader/>
                <NoteSettingStyles />
                <NoteSettingColor />
            </div>
        );
    }
}

export default NoteSettings;