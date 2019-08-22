import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Trackcard from './Trackcard'

export default class Tracks extends Component {
	state = {
		tracks: [],
		isTrackSearchDisplayed: false,
	};
	

	componentDidMount() {
		this.getTracks();
	}

	getTracks = () => {
        axios.get(`/api/barCharts/${this.props.barChartId}/tracks`)
            .then(res => {
			    this.setState({ tracks: res.data });
		});
	};



	render() {
		let tracksList = this.state.tracks.map(track => {
            return <li key={track._id}>
            <Link to={`barcharts/${this.props.match.params.barChartId}/tracks/${track._id}`}>
            {track.name}
            </Link>
			</li>;
			
		});
		return (
			<div>
				<ul>{tracksList}</ul>
                <p>from tracks component</p>
			</div>
		);
	}
}
