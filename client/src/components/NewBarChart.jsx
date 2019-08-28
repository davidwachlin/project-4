import React, { Component } from 'react';
// import TrackSearch from './TrackSearch/TrackSearch';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

//style imports
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'

export default class NewBarChart extends Component {
	state = {
		newBarChart: {
			name: '',
			graphFeature: 'energy'
		},
		redirectToBarCharts: false
	};

	handleChange = e => {
		const newBarChart = { ...this.state.newBarChart };
		newBarChart[e.target.name] = e.target.value;
		this.setState({ newBarChart: newBarChart });
	};

	handleSubmit = e => {
		e.preventDefault();
		axios.post(`/api/barCharts`, this.state.newBarChart).then(() => {
			this.setState({ redirectToBarCharts: true });
		});
	};
	render() {
		if (this.state.redirectToBarCharts) {
			return <Redirect to='/barCharts' />;
		}
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<Box>
						<TextField
							onChange={this.handleChange}
							value={this.state.newBarChart.name}
							required
							id='barchart-name'
							label='Name'
							className='textField'
							type='text'
							name='name'
							autoComplete='name'
							margin='normal'
							variant='outlined'
							helperText='A name for your barchart'
						/>
					</Box>

					<Box>

						<FormControl required>
							<InputLabel htmlFor='barchart-graphfeature'>
								Audio Feature
							</InputLabel>
							<Select
								value={this.state.newBarChart.graphFeature}
								onChange={this.handleChange}
								name='graphFeature'
								inputProps={{
									id: 'barchart-graphfeature'
								}}>
								<MenuItem value='energy'>Energy</MenuItem>

								<MenuItem value='duration_ms'>Duration</MenuItem>
								<MenuItem value='acousticness'>Acousticness</MenuItem>
								<MenuItem value='danceability'>Danceability</MenuItem>
								<MenuItem value='instrumentalness'>Instrumentalness</MenuItem>
								<MenuItem value='liveness'>Liveness</MenuItem>
								<MenuItem value='loudness'>Loudness</MenuItem>
								<MenuItem value='speechiness'>Speechiness</MenuItem>
								<MenuItem value='tempo'>Tempo</MenuItem>
								<MenuItem value='valence'>Valence</MenuItem>
								<MenuItem value='popularity'>Popularity</MenuItem>
							</Select>
							<FormHelperText>Pick an Audio Feature to graph</FormHelperText>
						</FormControl>
					</Box>

					<Box>
					<label htmlFor='submit-form'>
							<Button variant='contained' component='span'>
								Create Library
								<input id='submit-form' type='submit' style={{display: "none"}}/>
							</Button>
						</label>

					</Box>
				</form>
			</div>
		);
	}
}
