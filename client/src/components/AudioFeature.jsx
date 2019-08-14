import React, { Component } from 'react';
import axios from 'axios';

export default class AudioFeature extends Component {
	state = {
		audioFeatures: []
	};
    
    componentDidMount() {
		this.getAudioFeatures();
	}

	getAudioFeatures = () => {
		axios
			.get(
				`/api/users/${this.props.userId}/tracks/${
					this.props.trackId
				}/audiofeature`
			)
			.then(res => {
				this.setState({ audioFeatures: res.data });
			});
	};
	render() {
		let audiofeatureList = this.state.audioFeatures.map(feature => {
			return (
				<div>

                    <p>key:{feature.key}</p>
					<p>from map list energy: {feature.energy}</p>
					<p>from audiofeatureList</p>
				</div>
			);
		});
		return (
			<div>
				<p>{audiofeatureList}</p>


			</div>
		);
	}
}
