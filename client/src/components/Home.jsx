import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export default class Home extends Component {
	constructor() {
		super();
		const token = localStorage.getItem('token');
		// const token = params.access_token;
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
			}
		};
	}
	componentDidMount() {
		this.getCurrentUser();
		this.getNowPlaying();
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
			this.setState({
				currentUser: newUser
			});
		});
	}
	getNowPlaying() {
		spotifyApi.getMyCurrentPlaybackState().then(response => {
			console.log(response);
			this.setState({
				nowPlaying: {
					name: response.item.name,
					albumArt: response.item.album.images[0].url
				}
			});
		});
	}
	render() {
		return (
			<div className='Home'>
				<h1>Home</h1>
				<div>Now Playing: {this.state.nowPlaying.name}</div>
				<div>{this.state.currentUser.email}</div>
			</div>
		);
	}
}
