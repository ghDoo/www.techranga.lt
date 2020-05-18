import React, { useReducer } from 'react';
import { Router, Switch, Route, } from "react-router-dom";
import { createBrowserHistory } from 'history';

import { Header } from './Components/Header/index';
import { MobileNav } from './Components/Mobile/MobileNav';
import { Home } from './containers/Home';
import { AboutUs } from './containers/AboutUs';
import { Equipment } from './containers/Equipment';
import { Parts } from './containers/Parts';
import { Automation } from './containers/Automation';
import { CompletedProjects } from './containers/CompletedProjects';
import { Contacts } from './containers/Contacts';
import { Footer } from './Components/Footer/index';

export const NavigationContext = React.createContext(false);

const initialState = {
  isMenuActive: false,
};

const toggleMenu = state => {
  let newState = Object.assign({}, state);
  newState.isMenuActive = !newState.isMenuActive;
  return newState;
};

const navReducer = (state, action) => {
  switch(action.type) {
    case 'toggleMenu': 
      return toggleMenu(state);
      default: throw new Error('Unexpected action');
  };
};

const history = createBrowserHistory();
history.push('/home');

export const App = () => {
  const [state, dispatch] = useReducer(navReducer, initialState);
  return (
    <Router history={history}>
      <NavigationContext.Provider value={ { state, dispatch } }>
        <Header />
        <MobileNav />
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
      </NavigationContext.Provider>
    </Router>
  );
};
