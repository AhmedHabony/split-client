import React, {Component} from 'react';
import { connect} from 'react-redux'
import {addFontFamily} from "../../actions/note";
import {createStructuredSelector} from "reselect";
import {fontFamilySelector} from "../../utils/noteSelectors";

class NoteSettingFontFamily extends Component {

    state = {
        fontFamily: ''
    };

    onSelectChange = async e =>{
        await this.setState({fontFamily: e.target.value})
        const {addFontFamily} = this.props;
        addFontFamily(this.state.fontFamily)
    };
    render() {

        const{fontFamily} =this.props
        return (
            <div className={'NoteSettingFontFamily'}>
                <select defaultValue={fontFamily}  onChange={this.onSelectChange}  className={'NoteSettingFontFamily__select'}>
                    <option  style={{fontFamily: 'Arial, sans-serif'}} value={'Arial, sans-serif'}>Arial</option>
                    <option  style={{fontFamily: 'Calibri, sans-serif'}} value={'Calibri, sans-serif'}>Calibri</option>
                    <option  style={{fontFamily: 'Constantia, sans-serif'}} value={'Constantia, serif'}>Constantia</option>
                    <option  style={{fontFamily: 'Comic Sans MS, sans-serif'}} value={'Comic Sans MS, sans-serif'}>Comic Sans MS</option>
                    <option style={{fontFamily: 'Consolas, sans-serif'}} value={'Consolas, sans-serif'}>Consolas</option>
                    <option  style={{fontFamily: 'Georgia, serif'}} value={'Georgia, sans-serif'}>Georgia</option>
                    <option  style={{fontFamily: 'Palatino, serif'}} value={'Palatino, serif'}>Palatino</option>
                    <option  style={{fontFamily: 'Impact, sans-serif'}} value={'Impact, sans-serif'}>Impact</option>
                    <option  style={{fontFamily: 'MV Boli, sans-serif'}} value={'MV Boli, sans-serif'}>MV Boli</option>
                    <option  style={{fontFamily: 'Segoe Script, sans-serif'}} value={'Segoe Script, sans-serif'}>Segoe Script</option>
                    <option  style={{fontFamily: 'Segoe UI, sans-serif'}} value={'Segoe UI, sans-serif'}>Segoe UI</option>
                    <option  style={{fontFamily: 'Fira Code, sans-serif'}} value={'Fira Code, sans-serif'}>Fira Code</option>
                    <option  style={{fontFamily: 'Times New Roman, sans-serif'}} value={'Times New Roman, sans-serif'}>Times New Roman</option>
                    <option  style={{fontFamily: 'Lato, sans-serif'}} value={'Lato, sans-serif'}>Lato</option>
                    <option  style={{fontFamily: 'Roboto, sans-serif'}} value={'Roboto, sans-serif'}>Roboto</option>
                    <option  style={{fontFamily: 'Raleway, sans-serif'}} value={'Raleway, sans-serif'}>Raleway</option>
                    <option  style={{fontFamily: 'Lobster, cursive'}} value={'Lobster, cursive'}>Lobster</option>
                    <option  style={{fontFamily: 'Pacifico, cursive'}} value={'Pacifico, cursive'}>Pacifico</option>
                    <option  style={{fontFamily: 'Righteous, cursive'}} value={'Righteous, cursive'}>Righteous</option>
                </select>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>({
    addFontFamily: fontFamily => dispatch(addFontFamily(fontFamily))
});
const mapStateToProps = createStructuredSelector({
    fontFamily: fontFamilySelector
})
export default connect(mapStateToProps, mapDispatchToProps)(NoteSettingFontFamily);