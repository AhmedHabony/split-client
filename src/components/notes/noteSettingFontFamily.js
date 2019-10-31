import React, {Component} from 'react';

class NoteSettingFontFamily extends Component {

    state = {
        fontFamily: ''
    };

    onSelectChange = e =>{
        this.setState({fontFamily: e.target.value})
    };
    render() {
        return (
            <div className={'NoteSettingFontFamily'}>
                <select onChange={this.onSelectChange} className={'NoteSettingFontFamily__select'}>
                    <option style={{fontFamily: 'Aldhabi, sans-serif'}} value={'Aldhabi'}>Aldhabi</option>
                    <option style={{fontFamily: 'Andalus, sans-serif'}} value={'Andalus'}>Andalus</option>
                    <option style={{fontFamily: 'Arabic Typesetting, sans-serif'}}  value={'Arabic Typesetting'}>Arabic Typesetting</option>
                    <option style={{fontFamily: 'Arial, sans-serif'}} value={'Arial'}>Arial</option>
                    <option style={{fontFamily: 'Cambria Math, sans-serif'}} value={'Cambria Math'}>Cambria Math</option>
                    <option style={{fontFamily: 'Comic Sans MS, sans-serif'}} value={'Comic Sans MS'}>Comic Sans MS</option>
                    <option style={{fontFamily: 'Consolas, sans-serif'}} value={'Consolas'}>Consolas</option>
                    <option style={{fontFamily: 'Courier, sans-serif'}} value={'Courier'}>Courier</option>
                    <option style={{fontFamily: 'Courier New, sans-serif'}} value={'Courier New'}>Courier New</option>
                    <option style={{fontFamily: 'Impact, sans-serif'}} value={'Impact'}>Impact</option>
                    <option style={{fontFamily: 'MV Boli, sans-serif'}} value={'MV Boli'}>MV Boli</option>
                    <option style={{fontFamily: 'Segoe Script, sans-serif'}} value={'Segoe Script'}>Fira Code</option>
                    <option style={{fontFamily: 'Fira Code, sans-serif'}} value={'Fira Code'}>Segoe UI</option>
                    <option style={{fontFamily: 'Times New Roman, sans-serif'}} value={'Times New Roman'}>Fira Code</option>
                </select>
            </div>
        );
    }
}

export default NoteSettingFontFamily;