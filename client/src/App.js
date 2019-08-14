import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import Tracks from './components/Tracks'
import SingleUser from './components/SingleUser'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Users}/>
          <Route path='/:userId/tracks' component={Tracks} />
          <Route path='/:userId' component={SingleUser}
          <Route path='/:userId/tracks/:trackId' component={SingleTrack}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
