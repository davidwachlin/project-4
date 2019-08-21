import React, { Component } from 'react';
// import TrackSearch from './TrackSearch/TrackSearch';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class NewBarChart extends Component {
	state = {
		newBarChart: {
			name: '',
			graphFeature: 'energy'
		},
		redirectToBarCharts: false
	};

	handleChange = e => {
		const newBarChart = { ...this.state.newBarChart };
		newBarChart[e.target.name] = e.target.value;
		this.setState({ newBarChart: newBarChart });
	};

	handleSubmit = e => {
		e.preventDefault();
		axios.post(`/api/barCharts`, this.state.newBarChart).then(() => {
			this.setState({ redirectToBarCharts: true });
		});
	};
	render() {
		if (this.state.redirectToBarCharts) {
			return <Redirect to='/barCharts' />;
		}
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='barchart-name'>Name</label>
					<input
						onChange={this.handleChange}
						type='text'
						id='barchart-name'
						name='name'
						value={this.state.newBarChart.name}
						placeholder='Enter name'
					/>
					<label htmlFor='barchart-graphfeature'>Graph Feature</label>
					<select value={this.state.newBarChart.graphFeature} id='barchart-graphfeature' onChange={this.handleChange}>
						<option value='duration_ms'>Duration</option>
						<option value='acousticness'>Acousticness</option>
						<option value='danceability'>Danceability</option>
						<option value='instrumentalness'>Instrumentalness</option>
						<option value='liveness'>Liveness</option>
						<option value='loudness'>Loudness</option>
						<option value='speechiness'>Speechiness</option>
						<option value='tempo'>Tempo</option>
						<option value='valence'>Valence</option>
						<option value='popularity'>Popularity</option>
					</select>
					<input type='submit' />
				</form>
			</div>
		);
	}
}
