import React from 'react';
import { Router, Switch, Route, } from "react-router-dom";
import { createBrowserHistory } from 'history';

import { Header } from './Components/Header/index';
import { Home } from './containers/Home';
import { AboutUs } from './containers/AboutUs';
import { Equipment } from './containers/Equipment';
import { Parts } from './containers/Parts';
import { Automation } from './containers/Automation';
import { CompletedProjects } from './containers/CompletedProjects';
import { Contacts } from './containers/Contacts';
import { Footer } from './Components/Footer/index';

const history = createBrowserHistory();
history.push('/home');

export const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path='/home' component={ Home } />
        <Route path='/about' component={ AboutUs } />
        <Route path='/equipment' component={ Equipment } />
        <Route path='/parts' component={ Parts } />
        <Route path='/automation' component={ Automation } />
        <Route path='/projects' component={ CompletedProjects } />
        <Route path='/contacts' component={ Contacts } />
      </Switch>
      <Footer />
    </Router>
  );
};
