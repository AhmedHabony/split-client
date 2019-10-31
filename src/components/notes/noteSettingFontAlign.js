import React, {Component} from 'react';

import {ReactComponent as LeftAlign} from './../../assets/left-alignment.svg'
import {ReactComponent as RightAlign} from './../../assets/right-alignment.svg'
import {ReactComponent as CenterAlign} from './../../assets/center-alignment.svg'



class NoteSettingFontAlign extends Component {

    state = {
        fontAlign: '',
        selectedLeftFontAlign: false,
        selectedCenterFontAlign: false,
        selectedRightFontAlign: false,
    };
    onLeftFontAlignClicked = async e => {
        const fontAlign = e.target.id;
        await this.setState(prevState =>({
            fontAlign: fontAlign,
            selectedLeftFontAlign: !prevState.selectedLeftFontAlign
        }))
    };
    onCenterFontAlignClicked = async e => {
        const fontAlign = e.target.id;
        await this.setState(prevState =>({
            fontAlign: fontAlign,
            selectedCenterFontAlign: !prevState.selectedCenterFontAlign
        }))
    };
    onRightFontAlignClicked = async e => {
        const fontAlign = e.target.id;
        await this.setState(prevState =>({
            fontAlign: fontAlign,
            selectedRightFontAlign: !prevState.selectedRightFontAlign
        }));

    };

    render() {
        return (
            <div className={'NoteSettingFontAlign'}>
                <button onClick={this.onLeftFontAlignClicked}> <LeftAlign /> </button>
                <button onClick={this.onCenterFontAlignClicked}> <CenterAlign  /> </button>
                <button onClick={this.onRightFontAlignClicked}> <RightAlign />  </button>
            </div>
        );
    }
}

export default NoteSettingFontAlign;