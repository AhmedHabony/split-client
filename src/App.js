import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/header";
import Home from "./pages/Home";
import Incomes from "./pages/Incomes";
import ToDo from "./pages/To-Do";
import Note from "./pages/Note";
import Modal from "./components/Modal/Modal";
import SignInCard from "./components/signIn/signInCard";
import {connect} from "react-redux";
import GetStarted from "./pages/GetStarted";
import OpenNote from "./components/notes/notePortals/openNote";
import EditNote from "./components/notes/notePortals/editNote";
import DeleteNote from "./components/notes/notePortals/deleteNote";

class App extends Component {

    render() {
        const {isOpen, isNoteOpen, isEditOpen, isDeleteOpen} = this.props;
        console.log(isDeleteOpen, '/mee')
        return (
            <div className={'App'}>
                <Header/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/incomes'} component={Incomes}/>
                    <Route path={'/plan'} component={ToDo}/>
                    <Route path={'/notes'} component={Note}/>
                    <Route path={'/getting-started'} component={GetStarted}/>
                </Switch>
                {
                    isOpen &&<Modal><SignInCard /></Modal>

                }
                {
                    isNoteOpen && <Modal> <OpenNote /> </Modal>
                }
                {
                    isEditOpen && <Modal> <EditNote /> </Modal>
                }
                {
                    isDeleteOpen && <Modal> <DeleteNote/> </Modal>
                }

            </div>
        );
    }
}
const mapStateToProps = state =>({
    isOpen: state.signIn.isOpen,
    isNoteOpen: state.notePortals.isNoteOpen,
    isEditOpen: state.notePortals.isEditOpen,
    isDeleteOpen: state.notePortals.isDeleteOpen
});

export default connect(mapStateToProps) (App);