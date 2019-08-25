import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Trackcard from './Trackcard';

//style imports
import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';

export default class Tracks extends Component {
	state = {
		tracks: [],
		isTrackSearchDisplayed: false
	};

	componentDidMount() {
		this.getTracks();
	}

	getTracks = () => {
		console.log('from tracks', this.props)
		axios
			.get(`/api/barCharts/${this.props.barChartId}/tracks`)
			.then(res => {
				this.setState({ tracks: res.data });
			});
	};

	render() {
		let tracksList = this.state.tracks.map(track => {
			console.log(track);
			console.log(track.album[0].images[1].url);
			return (

					<Trackcard
						key={track._id}
						track={track}
						barChartId={this.props.barChartId}
						imgUrl={track.album[0].images[1].url}
					/>
			);
			// <li key={track._id}>
			// <Link to={`/barcharts/${this.props.match.params.barChartId}/tracks/${track._id}`}>
			// {track.name}
			// </Link>
			// </li>;
			// <Trackcard key={track._id} track={track} barChartId={this.props.match.params.barChartId} imgUrl={track.album[0].images[1].url} />
		});
		return (
			<div>
				{tracksList}
			</div>
		);
	}
}
