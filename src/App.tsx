import React from 'react';
import './styles/app/app.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';

function App() {
    console.log(process.env.PUBLIC_URL);
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/tutorial"} component={Tutorial} />
            </Switch>
        </HashRouter>
    )
  // return (
  //     <Router basename={process.env.PUBLIC_URL}>
  //             <Switch>
  //                 <Route exact path={"/strate/"}>
  //                     <Home />
  //                 </Route>
  //                 <Route path={"/strate/tutorial"}>
  //                     <Tutorial />
  //                 </Route>
  //                 <Route exact path={"/"} component={Home} />
  //                 <Route exact path={"/tutorial"} component={Tutorial} />
  //             </Switch>
  //     </Router>
  // );
}

export default App;
