import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from "./components/header/header";
import Home from "./pages/Home";
import Incomes from "./pages/Incomes";
import ToDo from "./pages/To-Do";
import Note from "./pages/Note";

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Header />
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route  path={'/incomes'} component={Incomes} />
                    <Route path={'/plan'} component={ToDo} />
                    <Route path={'/notes'} component={Note}/>
                </Switch>
            </div>
        );
    }
}

export default App;