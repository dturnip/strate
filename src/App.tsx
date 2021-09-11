import React from 'react';
import './styles/app/app.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import How from './pages/How';
import Game from './pages/Game';

function App() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/how"} component={How} />
                <Route exact path={"/play"} component={Game} />
            </Switch>
        </HashRouter>
    )
}

export default App;
