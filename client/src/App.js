import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import Tracks from './components/Tracks'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Users}/>
          <Route path='/:userId/tracks' component={Tracks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
