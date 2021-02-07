//
//
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Accordion from './projects-4-5-6/4-accordion/setup/src/App';
import MainMenu from './projects-4-5-6/5-menu/setup/src/App';

import Tabs from './projects-4-5-6/6-tabs/setup/src/App';

import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <div className='app__link-container'>
          <Link to='/accordion'>Accordion</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/tabs'>Tabs</Link>
        </div>

        {/* <hr /> */}

        <Switch>
          <Route exact path='/accordion'>
            <Accordion />
          </Route>
          <Route exact path='/menu'>
            <MainMenu />
          </Route>
          <Route exact path='/tabs'>
            <Tabs />
          </Route>
          {/* <Route path='/tours'>
            <Tours />
          </Route>
          <Route path='/reviews'>
            <Reviews />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
