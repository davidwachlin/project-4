import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';
import Trackcard from './Trackcard'
import BarChart from './BarChart'
import { Link } from 'react-router-dom'
import './Home.css'
import TrackSearch from './TrackSearch/TrackSearch'

const spotifyApi = new SpotifyWebApi();

export default class Home extends Component {
	constructor() {
		super();
		const token = localStorage.getItem('token');
		if (token) {
			spotifyApi.setAccessToken(token);
		}
		this.state = {
			loggedIn: token ? true : false,
			nowPlaying: { name: 'Not Checked', albumArt: '' },
			currentUser: {
				displayName: '',
				email: '',
				externalUrls: '',
				country: '',
				id: '',
				type: ''
			},
			topTracks: [],
			topTrackAudioFeatures:[],
			tracksWithFeatures:[]

		};
	}
	componentDidMount() {
		this.getCurrentUser();


	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.currentUser !== this.state.currentUser) {
			this.getTopTracks();
			// this.getNowPlaying();
		}
		if (prevState.topTracks !== this.state.topTracks) {
			this.getTopTrackAudioFeatures()
		}
		if (prevState.topTrackAudioFeatures !== this.state.topTrackAudioFeatures) {
			this.attachTrackAudioFeatures()
		}
	}


	attachTrackAudioFeatures() {
		const { topTracks, topTrackAudioFeatures} = this.state;
		let tracksWithFeatures = [];
		topTracks.forEach((track, i) => {
			  tracksWithFeatures.push(Object.assign({}, track, topTrackAudioFeatures[i]));
			  
		});
		this.setState({ tracksWithFeatures: tracksWithFeatures })
		console.log(`tracksWithFeatures:`)
		console.log(tracksWithFeatures)
	}
	getCurrentUser() {
		spotifyApi.getMe().then(res => {
			console.log(res);
			const newUser = {
				displayName: res.display_name,
				email: res.email,
				externalUrls: res.external_urls,
				country: res.country,
				id: res.id,
				type: res.type
			};
			// axios.get('/api/users/checkUser', newUser).then((res) => {
			// 	console.log(res)
			// })
			axios.post('/api/users', newUser).then((res) => {});
			this.setState({
				currentUser: newUser

			});
		});
	}
	

	getTopTracks() {
		spotifyApi.getMyTopTracks({limit: 10}).then((data) => {
			this.setState({ topTracks: data.items })
		})
	}
	
	getTopTrackAudioFeatures() {
		let trackIds = this.state.topTracks.map(track => track.id)
		spotifyApi.getAudioFeaturesForTracks(trackIds).then(response => {
			console.log(response)
			this.setState({ topTrackAudioFeatures: response.audio_features })
		})
	}
	getNowPlaying() {
		spotifyApi.getMyCurrentPlaybackState().then(response => {
			console.log(response)
			this.setState({
				nowPlaying: {
					name: response.item.name,
					albumArt: response.item.album.images[0].url
				}
			})
		})
	}
	render() {
		const { topTracks } = this.state;
		const tracksList = !topTracks.length ? null 
		: topTracks.map(track => {
			return (
				<Trackcard key={track.id} track={track} />
			)

		
		})

		

		
		return (
			<div className='Home'>
				<Link to='/barcharts/new'>New BarChart</Link>
				<Link to='/barcharts/'>All BarCharts</Link>
				<div>Now Playing: {this.state.nowPlaying.name}</div>
				<div>{this.state.currentUser.email}</div>
				<div>{this.state.currentUser.id}</div>
				<div className="track-list">

				{tracksList}

				</div>
				<BarChart data={this.state.tracksWithFeatures} />

			</div>
		);
	}
}
