import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Users from './components/Users'
// import Tracks from './components/Tracks'
import SingleUser from './components/SingleUser';
import SingleTrack from './components/SingleTrack';
import Home from './components/Home';
import Login from './components/Login';
import NewBarChart from './components/NewBarChart';
import BarCharts from './components/BarCharts';
import SingleBarChart from './components/SingleBarChart';
import Comment from './components/Comment';
import Tracks from './components/Tracks'

//style imports
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import './App.css';





const theme = createMuiTheme({
  palette: {
	primary: {
    //   light: '#b0ff57',
      main: '#1DB954'
    //   dark: '#32cb00',
    //   contrastText: '#000000'

	  ,
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },

});


function App() {
	return (
		<ThemeProvider theme={theme}>
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/barcharts/:barChartId/tracks/:trackId' component={SingleTrack}/>
					<Route
						path='/barcharts/:barChartId/comments/:commentId'
						component={Comment}
					/>
					<Route exact path='/barcharts/new' component={NewBarChart} />
					<Route path='/barcharts/:barChartId/tracks' component={Tracks} />
					<Route path='/barcharts/:barChartId' component={SingleBarChart} />
					<Route path='/barcharts' component={BarCharts} />
					<Route path='/home' component={Home} />
					<Route exact path='/' component={Login} />
					{/* <Route path='/:userId' component={SingleUser} /> */}
					{/* <Route path='/:userId/tracks' component={Tracks} /> */}
				</Switch>
			</Router>
		</div>
		</ThemeProvider>
	);
}

export default App;
