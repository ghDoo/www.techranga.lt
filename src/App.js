import React, { useReducer, lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const Header = lazy(() => import('./Components/Header/index'));
const MobileNav = lazy(() => import('./Components/Mobile/MobileNav'));
const Home = lazy(() => import('./containers/Home'));
const AboutUs = lazy(() => import('./containers/AboutUs'));
const TableA = lazy(() => import('./containers/TableA'));
const TableB = lazy(() => import('./containers/TableB'));
const TableC = lazy(() => import('./containers/TableC'));
const Equipment = lazy(() => import('./containers/Equipment'));
const Parts = lazy(() => import('./containers/Parts'));
const Automation = lazy(() => import('./containers/Automation'));
const CompletedProjects = lazy(() => import('./containers/CompletedProjects'));
const EsProjects = lazy(() => import('./containers/EsProjects'));
const Contacts = lazy(() => import('./containers/Contacts'));
const Footer = lazy(() => import('./Components/Footer/index'));

const loader = () => <p className='loader'> Loading... </p>;

const initialState = {
  isMenuActive: false,
};

export const NavigationContext = React.createContext(initialState);

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

const App = () => {
  const [ state, dispatch ] = useReducer(navReducer, initialState);

  return (
    <Suspense fallback = { loader() }>
      <Router>
        <NavigationContext.Provider value={ { state, dispatch } }>
          <Header />
          <MobileNav />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ AboutUs } />
            <Route path='/milling' component={ TableA } />
            <Route path='/turning' component={ TableB } />
            <Route path='/other' component={ TableC } />
            <Route path='/equipment' component={ Equipment } />
            <Route path='/parts' component={ Parts } />
            <Route path='/automation' component={ Automation } />
            <Route path='/projects' component={ CompletedProjects } />
            <Route path='/es_projects' component={ EsProjects } />
            <Route path='/contacts' component={ Contacts } />
          </Switch>
          <Footer />
        </NavigationContext.Provider>
      </Router>
    </Suspense>
  );
};

export default App;
