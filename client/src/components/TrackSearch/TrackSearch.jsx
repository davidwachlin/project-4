import React, { Component } from 'react';
import SearchBox from './SearchBox';
import SpotifyWebApi from 'spotify-web-api-js';
import Trackcard from '../Trackcard';
import '../Home.css'

const spotifyApi = new SpotifyWebApi();

export default class TrackSearch extends Component {
	constructor() {
		super();
		const token = localStorage.getItem('token');
		if (token) {
			spotifyApi.setAccessToken(token);
		}
		this.state = {
			searchTracks: [],
			searchField: ''
		};
	}
	handleChange = e => {
		const newSearch = e.target.value;
		this.setState({ searchField: newSearch });
		console.log(this.state.searchField);
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state.searchField);
		spotifyApi.searchTracks(this.state.searchField).then(response => {
			this.setState({ searchTracks: response.tracks.items });
		});
	};

	render() {
		const { searchTracks } = this.state;
		const tracksList = !searchTracks.length
			? null
			: searchTracks.map(track => {
					return <Trackcard key={track.id} track={track} />;
			  });

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='search' />
					<input
						className='search'
						type='search'
						placeholder='Search tracks'
						onChange={this.handleChange}
					/>
				</form>
				<div className='track-list'>

				{tracksList}
				</div>
			</div>
		);
	}
}
