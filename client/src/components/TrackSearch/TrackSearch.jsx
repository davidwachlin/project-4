import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Trackcard from '../Trackcard';
import '../Home.css'
import axios from 'axios'
import '../Trackcard.css'

const spotifyApi = new SpotifyWebApi();

export default class TrackSearch extends Component {
	constructor(props) {
		super(props);
		const token = localStorage.getItem('token');
		if (token) {
			spotifyApi.setAccessToken(token);
		}
		this.state = {
			searchTracks: [],
			searchField: '',
			newTrack: {}
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
					return <Trackcard track={track} barChartId={this.props.barChartId} />
					
			})

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
