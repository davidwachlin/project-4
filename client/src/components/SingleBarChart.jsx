import React, { Component } from 'react';
import axios from 'axios';
import BarChart from './BarChart';
import SpotifyWebApi from 'spotify-web-api-js';
import TrackSearch from './TrackSearch/TrackSearch';
import { Link } from 'react-router-dom';
import Trackcard from './Trackcard';
import './Home.css';

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
			isNewCommentFormDisplayed: false
		};
	}
	componentDidMount() {
		this.getBarChart();
		this.getTracks();
		this.getCommments();
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
	getTracks = () => {
		console.log(this.props.match.params.barChartId);
		axios
			.get(`/api/barCharts/${this.props.match.params.barChartId}/tracks`)
			.then(res => {
				console.log(res.data);
				this.setState({ tracks: res.data });
			});
	};

	getCommments = () => {
		axios
			.get(`/api/barCharts/${this.props.match.params.barChartId}/comments`)
			.then(res => {
				this.setState({ comments: res.data });
			});
	};

	getTrackAudioFeatures = () => {
		let trackIds = this.state.tracks.map(track => track.id);
		spotifyApi.getAudioFeaturesForTracks(trackIds).then(response => {
			console.log(response);
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
		console.log(`tracksWithFeatures:`);
		console.log(tracksWithFeatures);
	}

	handleShowSearchBar = () => {
		this.setState(state => {
			return { showSearchBar: !state.showSearchBar };
		});
	};

	handleToggleNewCommentForm = () => {
		this.setState(state => {
			return { isNewCommentFormDisplayed: !state.isNewCommentFormDisplayed };
		});
	};

	handleInputChange = e => {
		const newComment = { ...this.state.newComment };
		newComment[e.target.name] = e.target.value;
		this.setState({ newComment: newComment });
	};

	handleCommentSubmit = event => {
		event.preventDefault();
		axios
			.post(
				`/api/barCharts/${this.props.match.params.barChartId}/comments`,
				this.state.newComment
			)
			.then(() => {
				this.handleToggleNewCommentForm();
				this.getCommments()
			});

	};

	render() {
		// let trackList = this.state.tracks.map(track => {
		// 	console.log(track)
		// 	return <Trackcard track={track} barChartId={this.props.match.params.barChartId} />
		// })

		let commentList = this.state.comments.map(comment => (
			<div key={comment._id}>
				<p>{comment.comment}</p>
				<p>By: {comment.author}</p>
				<Link
					to={`/barcharts/${this.props.match.params.barChartId}/comments/${
						comment._id
					}`}>
					View/Edit
				</Link>
			</div>
		));
		return (
			<div>
				<h1>{this.state.barChart.name}</h1>

				{this.state.showSearchBar ? (
					<div>
						<button onClick={this.handleShowSearchBar}>Done</button>
						<TrackSearch barChartId={this.props.match.params.barChartId} />
					</div>
				) : (
					<div>
						<div>
							<Link
								to={`/barcharts/${this.props.match.params.barChartId}/tracks`}>
								Tracks
							</Link>
						</div>
						<button onClick={this.handleShowSearchBar}>Add Tracks</button>

						<BarChart
							data={this.state.tracksWithFeatures}
							graphFeature={this.state.graphFeature}
						/>

						<div className='track-list'>{/* {trackList} */}</div>

						{this.state.isNewCommentFormDisplayed ? (
							<form onSubmit={this.handleCommentSubmit}>
								<label htmlFor='comment'>Comment</label>
								<input
									onChange={this.handleInputChange}
									type='text'
									id='comment'
									name='comment'
									value={this.state.newComment.comment}
								/>

								<label htmlFor='author'>Author</label>
								<input
									onChange={this.handleInputChange}
									type='text'
									id='author'
									name='author'
									value={this.state.newComment.author}
								/>
								<input type='submit' value='Add' />
							</form>
						) : (
							<div>
								<h5>Comments</h5>
								{commentList}

								<button onClick={this.handleToggleNewCommentForm}>
									New Comment
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		);
	}
}
