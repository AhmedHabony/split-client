import React, {Component} from 'react';

import {ReactComponent as LeftAlign} from './../../assets/left-alignment.svg'
import {ReactComponent as RightAlign} from './../../assets/right-alignment.svg'
import {ReactComponent as CenterAlign} from './../../assets/center-alignment.svg'

import {addFontAlign} from "../../actions/note";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {fontAlignSelector} from "../../utils/noteSelectors";


class NoteSettingFontAlign extends Component {

    state = {
        selectedLeftFontAlign: false,
        selectedCenterFontAlign: false,
        selectedRightFontAlign: false,
    };
    onLeftFontAlignClicked =  async e => {
        await this.setState(prevState => ({
            selectedLeftFontAlign: !prevState.selectedLeftFontAlign,
            selectedCenterFontAlign: false,
            selectedRightFontAlign: false
        }));
        const {addFontAlign} = this.props;
        const fontAlignProps = {
            fontTextAlign: 'left',
            leftAlign: this.state.selectedLeftFontAlign,
            centerAlign: this.state.selectedCenterFontAlign,
            rightAlign: this.state.selectedRightFontAlign
        };
           addFontAlign(fontAlignProps)
    };
    onCenterFontAlignClicked = async e => {
        await this.setState(prevState => ({
            selectedCenterFontAlign: !prevState.selectedCenterFontAlign,
            selectedLeftFontAlign: false,
            selectedRightFontAlign: false
        }));

        const {addFontAlign} = this.props;
        const fontAlignProps = {
            fontTextAlign: 'center',
            leftAlign: this.state.selectedLeftFontAlign,
            centerAlign: this.state.selectedCenterFontAlign,
            rightAlign: this.state.selectedRightFontAlign
        };
          addFontAlign(fontAlignProps)
    };
    onRightFontAlignClicked = async e => {
        await this.setState(prevState => ({
            selectedRightFontAlign: !prevState.selectedRightFontAlign,
            selectedCenterFontAlign: false,
            selectedLeftFontAlign: false
        }));
        const {addFontAlign} = this.props;
        const fontAlignProps = {
            fontTextAlign: 'end',
            leftAlign: this.state.selectedLeftFontAlign,
            centerAlign: this.state.selectedCenterFontAlign,
            rightAlign: this.state.selectedRightFontAlign
        };
        addFontAlign(fontAlignProps)

    };

    render() {
        const{textAlign} = this.props;
        return (
            <div className={'NoteSettingFontAlign'}>
                <button style={{fill: `${(textAlign ? (textAlign.leftAlign === true ? '#fff': '') : '') }`}} onClick={this.onLeftFontAlignClicked}> <LeftAlign /> </button>
                <button style={{fill: `${(textAlign ? (textAlign.centerAlign === true ? '#fff': '') : '') }`}} onClick={this.onCenterFontAlignClicked}><CenterAlign/></button>
                <button style={{fill: `${(textAlign ? (textAlign.rightAlign === true ? '#fff': '') : '') }`}} onClick={this.onRightFontAlignClicked}>    <RightAlign/>      </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addFontAlign: fontAlign => dispatch(addFontAlign(fontAlign))
});

const mapStateToProps = createStructuredSelector({
    textAlign: fontAlignSelector
})
export default connect(mapStateToProps, mapDispatchToProps)(NoteSettingFontAlign);