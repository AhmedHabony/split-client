import React, {Component} from 'react';
import { addFontColor} from "../../actions/note";
import {connect} from "react-redux";

class NoteSettingColor extends Component {

    state = {
        color: ''
    };

    onColorClocked = async e => {
         await this.setState({color: e.target.value});
        const {addFontColor} = this.props;

        await addFontColor(this.state.color)

    };
    render() {
        return (
            <div className={'NoteSettingColor'}>
                <button style={{backgroundColor: '#ff2e63'}} value={'#ff2e63'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#eaeaea'}} value={'#eaeaea'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#252a34'}} value={'#252a34'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#01d28e'}} value={'#01d28e'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#f09'}} value={'#f09'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#970690'}} value={'#970690'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#6f0117'}} value={'#6f0117'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#0f0766'}} value={'#0f0766'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#ff9a00'}} value={'#ff9a00'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#e0d909'}} value={'#e0d909'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#fcc8f8'}} value={'#fcc8f8'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#65eeb7'}} value={'#65eeb7'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#970747'}} value={'#970747'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#ff6107'}} value={'#ff6107'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#fff200'}} value={'#fff200'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch =>({
    addFontColor: fontColor => dispatch(addFontColor(fontColor))
});
export default connect(null, mapDispatchToProps)(NoteSettingColor);