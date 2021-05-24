import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllMeetups from './AllMeetups'
import NewMeetup from './NewMeetup'
import Favorites from './Favorites'
import Layout from './layout'



export default function App() {
  return (
    <Router>
      <div>
        <Layout/>
        <Switch>
          <Route path="/" exact>
            <AllMeetups/>
          </Route>
          <Route path="/new">
           <NewMeetup/>
          </Route>
          <Route path="/favorites">
           <Favorites/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}