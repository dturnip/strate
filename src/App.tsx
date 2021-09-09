import React from 'react';
import './styles/app/app.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';

function App() {
    console.log(process.env.PUBLIC_URL);
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/play"} component={Game} />
            </Switch>
        </HashRouter>
    )
}

export default App;
