import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllMeetups from './AllMeetups'
import NewMeetup from './NewMeetup'


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <AllMeetups/>
          </Route>
          <Route path="/new">
           <NewMeetup/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}