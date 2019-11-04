import React, {Component} from 'react';
import {connect} from 'react-redux'
import {isDeleteOpened, deleteNote} from "../../../actions/note";

class DeleteNote extends Component {

    onCancelBtnClick = e => {
        const {closePortal} = this.props;
        closePortal(false)
    };

    onDeleteBtnClick = async e =>{
        const {closePortal, deleteNote, selectedNote} = this.props;
        await deleteNote(selectedNote);
        closePortal(false)
    };

    render() {
        return (
            <div className={'DeleteNote'}>
                <div className={'DeleteNote__container'}>
                    <p>
                        This note will be deleted from your saved notes, Click the delete button to perform or cancel to
                        cancel
                    </p>
                    <div>
                        <button className={'DeleteNote__container-delete'} onClick={this.onDeleteBtnClick}>Delete</button>
                        <button className={'DeleteNote__container-cancel'} onClick={this.onCancelBtnClick}>Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    closePortal: isOpen => dispatch(isDeleteOpened(isOpen)),
    deleteNote: deletedNote => dispatch(deleteNote(deletedNote))
});

const mapStateToProps = state => ({
    selectedNote: state.note.openedNote
});
export default connect(mapStateToProps, mapDispatchToProps)(DeleteNote);