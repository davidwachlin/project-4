import React, { Component } from 'react';
import axios from 'axios';

export default class Tracks extends Component {
	state = {
		tracks: []
	};

	componentDidMount() {
		this.getUserTracks();
	}

	getUserTracks = () => {
		axios.get('/api/users/:userId/tracks').then(res => {
			this.setState({ users: res.data });
		});
	};

	render() {
		let tracksList = this.state.users.map(track => {
			return <li key={track._id}>{track.title}</li>;
		});
		return (
			<div>
				<ul>{tracksList}</ul>
			</div>
		);
	}
}
