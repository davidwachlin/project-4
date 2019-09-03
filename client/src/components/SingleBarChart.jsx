import React, { Component } from 'react';
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-js';
import { Link, Redirect } from 'react-router-dom';

import Trackcard from './Trackcard';
import BarChart from './BarChart';
import TrackSearch from './TrackSearch/TrackSearch';
import Tracks from './Tracks';
import Comments from './Comments';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Home.css';
import './SingleBarChart.css';

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
			tracksWithFeatures: [],
			showSearchBar: false,
			showComments: false,
			comments: [],
			newComment: {
				comment: '',
				author: ''
			},
			isNewCommentFormDisplayed: false,
			redirectToHome: false,
			formattedTracks: [],
			showRemove: true,
			redirectToBarChart: false
		};
	}
	componentDidMount() {
		console.log('singlebarchart component did mount');
		this.getBarChart();
		// this.getTracks();
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
		if (prevState.tracksWithFeatures !== this.state.tracksWithFeatures) {
			this.formatTracks();
		}
	}

	getBarChart = () => {
		axios
			.get(`/api/barCharts/${this.props.match.params.barChartId}`)
			.then(res => {
				this.setState({ barChart: res.data });
			});
	};

	handleDeleteBarChart = () => {
		axios
			.delete(`/api/barCharts/${this.props.match.params.barChartId}`)
			.then(() => {
				this.setState({ redirectToHome: true });
			});
	};

	getTracks = () => {
		console.log('from single barchart', this.props.match.params.barChartId);
		axios
			.get(`/api/barCharts/${this.props.match.params.barChartId}/tracks`)
			.then(res => {
				console.log('from get tracks', res.data);
				this.setState({ tracks: res.data });
			});
	};

	formatTracks = () => {
		const editTracks = this.state.tracks.map(track => {
			return {
				...track,
				...{ album: track.album[0] }
			}
			// track.album = track.album[0];
			// console.log('from formatTracks 2', track);
		});
		console.log('from formatTracks 3 editTracks:', editTracks);
		this.setState({ formattedTracks: editTracks });
	};

	getTrackAudioFeatures = () => {
		let trackIds = this.state.tracks.map(track => track.id);
		spotifyApi.getAudioFeaturesForTracks(trackIds).then(response => {
			console.log('from get track audio features', response);
			this.setState({ tracksAudioFeatures: response.audio_features });
		});
	};

	attachTrackAudioFeatures() {
		const { tracks, tracksAudioFeatures } = this.state;
		let tracksWithFeatures = [];
		tracks.forEach((track, i) => {
			tracksWithFeatures.push(Object.assign({}, track, tracksAudioFeatures[i]));
		});
		this.setState({ tracksWithFeatures: tracksWithFeatures });

		console.log('tracks with features:', tracksWithFeatures);
	}

	handleShowSearchBar = () => {
		this.setState(state => {
			return { showSearchBar: !state.showSearchBar };
		});
	};

	handleDoneAdding = () => {
		this.setState(state => {
			return { showSearchBar: !state.showSearchBar, redirectToBarChart: !state.redirectToBarChart };
		});
	};
	

	// addTrackToBarChart = () => {
	// 	axios
	// 		.post(`/api/barCharts/${this.props.match.params.barChartId}/tracks`, this.props.track)
	// 		.then(res => {
	// 			this.setState({ redirectToBarChart: true });
	// 		})
	// };

	// deleteTrack = () => {
	// 	axios
	// 		.delete(
	// 			`/api/barCharts/${this.props.barChartId}/tracks/${this.props.track._id}`
	// 		)
	// 		.then(res => {
	// 			this.setState({ redirectToBarChart: true });
	// 		}).then(() => {
	// 			return <Redirect to={`/barcharts/${this.props.barChartId}`} />
	// 		})
	// }

	render() {
		if (this.state.redirectToHome) {
			return <Redirect to='/home' />;
		}

		if (this.state.redirectToBarChart) {
			return <Redirect to={`/barcharts/${this.props.match.params.barChartId}`} />;
		}

		return (
			<Container>
				{this.state.showSearchBar ? (
					<div>
						<Button
							variant='outlined'
							color='primary'
							onClick={this.handleDoneAdding}>
							Done
						</Button>
						<TrackSearch
							barChartId={this.props.match.params.barChartId}
							showRemove={this.state.showRemove}
						/>
					</div>
				) : (
					<div>
						<Box className='tracks-title'>
							<Typography variant='h4' gutterBottom className='tracks-title'>
								Tracks for {this.state.barChart.name}
							</Typography>
							<Button
								color='primary'
								onClick={this.handleDeleteBarChart}
								size='small'>
								Delete
							</Button>
						</Box>
						<Divider />

						<div>
							<Tracks
								tracks={this.state.formattedTracks}
								barChartId={this.props.match.params.barChartId}
								showRemove={this.state.showRemove}
							/>
						</div>
						<Button
							variant='outlined'
							color='primary'
							onClick={this.handleShowSearchBar}>
							Add Tracks
						</Button>

						<BarChart
							data={this.state.tracksWithFeatures}
							graphFeature={this.state.barChart.graphFeature}
						/>
						<Divider></Divider>
						<Box>
							<br></br>
						</Box>
						<Card>
							<Typography
								variant='h5'
								gutterBottom
								className='tracks-description'>
								Description
							</Typography>
							<Typography
								variant='body1'
								gutterBottom
								className='tracks-description'>
								{this.state.barChart.description}
							</Typography>
						</Card>
						<Comments barChartId={this.props.match.params.barChartId} />
					</div>
				)}
			</Container>
		);
	}
}
