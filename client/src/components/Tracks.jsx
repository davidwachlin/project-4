import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Tracks extends Component {
	state = {
		tracks: [],
		isNewFormDisplayed: false,
		newTrack: {},
		searchField: ''
	};
	

	componentDidMount() {
		this.getUserTracks();
	}

	getUserTracks = () => {
        axios.get(`/api/users/${this.props.userId}/tracks`)
            .then(res => {
			    this.setState({ tracks: res.data });
		});
	};

	handleChange = (e) => {
		e.preventDefault()
		this.e.target.name = this.e.target.value
		this.setState({})
	}

	render() {
		let tracksList = this.state.tracks.map(track => {
            return <li key={track._id}>
            <Link to={`/${this.props.userId}/tracks/${track._id}`}>
            {track.name}
            </Link>
            </li>;
		});
		return (
			<div>
				<ul>{tracksList}</ul>
                <p>from tracks component</p>
			</div>
		);
	}
}
