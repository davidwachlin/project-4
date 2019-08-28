import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Trackcard from '../Trackcard';
import axios from 'axios';

//style imports
import '../Home.css';
import '../Trackcard.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

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
					return (
						<Trackcard
							track={track}
							barChartId={this.props.barChartId}
							showRemove={this.props.showRemove}
						/>
					);
			  });

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<TextField
						id='outlined-search-input'
						label='track'
						className='textField'
						type='search'
						name='search'
						autoComplete='track'
						margin='normal'
						variant='outlined'
						onChange={this.handleChange}
						value={this.state.searchField}
					/>
					<div>
						<label htmlFor='submit-form'>
							<Button variant='contained' component='span'>
								Search
								<input
									id='submit-form'
									type='submit'
									style={{ display: 'none' }}
								/>
							</Button>
						</label>
					</div>
				</form>
				<div className='track-list'>{tracksList}</div>
			</div>
		);
	}
}
