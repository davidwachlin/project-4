import React, { Component } from 'react';
import SearchBox from './SearchBox';
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

    addTrackToBarChart() {
        axios.post(`/api/barCharts/${this.props.barChartId}/tracks`, )
        .then(res => {
            this.setState({ tracks: res.data })
        })
    }

	render() {
		const { searchTracks } = this.state;
		const tracksList = !searchTracks.length
			? null
			: searchTracks.map(track => {
					return <div key={track.id}className='Trackcard'>
							<img src={track.album.images[1].url} alt='cover' />
							<p>{track.name}</p>
							<p>{track.artists[0].name}</p>
							<button onClick={this.addTrackToBarChart}>Add</button>

						</div>
					
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
