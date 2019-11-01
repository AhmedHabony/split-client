import React, {Component} from 'react';

class AllNotesSearchBox extends Component {
    render() {
        return (
            <div className={'AllNotesSearchBox'}>
                <form className={'AllNotesSearchBox__form'}>
                    <input className={'AllNotesSearchBox__form__input'} placeholder={'Search by sentences...'}  type={'search'}/>
                </form>
            </div>
        );
    }
}

export default AllNotesSearchBox;