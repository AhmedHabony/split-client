import React, {Component} from 'react';

class NoteSettingColor extends Component {

    state = {
        color: '#fff'
    };

    onColorClocked = e => {
        this.setState({color: e.target.value})
    };
    render() {
        return (
            <div className={'NoteSettingColor'}>
                <button style={{backgroundColor: '#ff2e63'}} value={'#ff2e63'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#eaeaea'}} value={'#eaeaea'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#252a34'}} value={'#252a34'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#f38181'}} value={'#f38181'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#fce38a'}} value={'#fce38a'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#6a2c70'}} value={'#6a2c70'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#aa96da'}} value={'#aa96da'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#0f0766'}} value={'#0f0766'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#ff9a00'}} value={'#ff9a00'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#1fab89'}} value={'#1fab89'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#d72323'}} value={'#d72323'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#155263'}} value={'#155263'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#700961'}} value={'#700961'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#020205'}} value={'#020205'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
                <button style={{backgroundColor: '#0f4137'}} value={'#0f4137'} className={'NoteSettingColor__colorContainer'} onClick={this.onColorClocked}><span> </span></button>
            </div>
        );
    }
}

export default NoteSettingColor;