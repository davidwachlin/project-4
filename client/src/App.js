import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Users from './components/Users'
// import Tracks from './components/Tracks'
import SingleUser from './components/SingleUser';
import SingleTrack from './components/SingleTrack';
import Home from './components/Home';
import Login from './components/Login';
import NewBarChart from './components/NewBarChart'
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/barcharts/new' component={NewBarChart} />
          <Route path='/home' component={Home} />
					<Route path='/:userId/tracks/:trackId' component={SingleTrack} />
					<Route exact path='/' component={Login} />
					{/* <Route path='/:userId' component={SingleUser} /> */}
					{/* <Route path='/:userId/tracks' component={Tracks} /> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
