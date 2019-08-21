import React, { Component } from 'react';
import axios from 'axios';
import BarChart from './BarChart';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export default class SingleBarChart extends Component {
	constructor() {
		super();
		const token = localStorage.getItem('token');
		if (token) {
			spotifyApi.setAccessToken(token);
		}
		this.state = {
			barChart: {},
			tracks: [],
			tracksAudioFeatures: [],
			tracksWithFeatures: []
		};
	}
	componentDidMount() {
		this.getBarChart();
		this.getTracks();
		// this.getTrackAudioFeatures()
		// this.attachTrackAudioFeatures()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.barChart !== this.state.barChart) {
			this.getTracks();
		}
		if (prevState.tracks !== this.state.tracks) {
			this.getTrackAudioFeatures();
		}
		if (prevState.tracksAudioFeatures !== this.state.tracksAudioFeatures) {
			this.attachTrackAudioFeatures();
		}
	}
	getBarChart = () => {
		axios
			.get(`/api/barCharts/${this.props.match.params.barChartId}`)
			.then(res => {
				this.setState({ barChart: res.data });
			});
	};
	getTracks() {
		console.log(this.props.match.params.barChartId);
		axios
			.get(`/api/barCharts/${this.props.match.params.barChartId}/tracks`)
			.then(res => {
				console.log(res.data);
				this.setState({ tracks: res.data });
			});
	}

	getTrackAudioFeatures() {
		let trackIds = this.state.tracks.map(track => track.id);
		spotifyApi.getAudioFeaturesForTracks(trackIds).then(response => {
			console.log(response);
			this.setState({ tracksAudioFeatures: response.audio_features });
		});
	}

	attachTrackAudioFeatures() {
		const { tracks, tracksAudioFeatures } = this.state;
		let tracksWithFeatures = [];
		tracks.forEach((track, i) => {
			tracksWithFeatures.push(Object.assign({}, track, tracksAudioFeatures[i]));
		});
		this.setState({ tracksWithFeatures: tracksWithFeatures });
		console.log(`tracksWithFeatures:`);
		console.log(tracksWithFeatures);
	}

	render() {
		return (
			<div>
				<h1>{this.state.barChart.name}</h1>
				<p>{this.state.barChart.graphFeature}</p>
				<BarChart data={this.state.tracksWithFeatures} />
			</div>
		);
	}
}
