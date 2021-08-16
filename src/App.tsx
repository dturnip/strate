import React from 'react';
import './styles/app/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';

function App() {
  return (
      <Router>
              <Switch>
                  <Route exact path={"/strate/"}>
                      <Home />
                  </Route>
                  <Route path={"/strate/tutorial"}>
                      <Tutorial />
                  </Route>
              </Switch>
      </Router>
  );
}

export default App;
