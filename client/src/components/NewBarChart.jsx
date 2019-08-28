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
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './NewBarChart.css';

export default class NewBarChart extends Component {
	state = {
		newBarChart: {
			name: '',
			graphFeature: 'energy',
			description: ''
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
			<Container className='root'>
				<Paper className='NewBarChart-form'>
					<Grid
						container
						direction='column'
						justify='space-around'
						alignItems='center'
						className='NewBarChart-grid'
						>
						<Grid item className='NewBarChart-input'>
							<Typography component='h1' variant='h3' gutterBottom>
								Create New TrackGraph
							</Typography>
						</Grid>
						<form onSubmit={this.handleSubmit}>
							<Grid item className='NewBarChart-input'>
								<TextField
									onChange={this.handleChange}
									value={this.state.newBarChart.name}
									required
									id='name'
									label='Name'
									className='textField'
									type='text'
									name='name'
									autoComplete='name'
									margin='normal'
									variant='outlined'
									helperText='A name for your barchart'
									fullWidth
								/>
							</Grid>
							<Grid item className='NewBarChart-input'>
								<TextField
									fullWidth
									onChange={this.handleChange}
									value={this.state.newBarChart.description}
									id='description'
									label='Description'
									className='textField'
									type='text'
									name='description'
									placeholder='Description'
									autoComplete='description'
									multiline
									margin='normal'
									variant='outlined'
									helperText='A chart comparing danceability in Rolling Stones songs, etc.'
								/>
							</Grid>
							<Grid item>
								<br></br>
							</Grid>
							<Grid item className='NewBarChart-input'>
								<FormControl required>
									<InputLabel htmlFor='barchart-graphfeature'>
										Audio Feature
									</InputLabel>
									<Select
										fullWidth
										value={this.state.newBarChart.graphFeature}
										onChange={this.handleChange}
										name='graphFeature'
										input={<OutlinedInput name='graphFeature' fullWidth/>}
										inputProps={{
											id: 'barchart-graphfeature'
										}}>
										<MenuItem value='energy'>Energy</MenuItem>

										<MenuItem value='duration_ms'>Duration</MenuItem>
										<MenuItem value='acousticness'>Acousticness</MenuItem>
										<MenuItem value='danceability'>Danceability</MenuItem>
										<MenuItem value='instrumentalness'>
											Instrumentalness
										</MenuItem>
										<MenuItem value='liveness'>Liveness</MenuItem>
										<MenuItem value='loudness'>Loudness</MenuItem>
										<MenuItem value='speechiness'>Speechiness</MenuItem>
										<MenuItem value='tempo'>Tempo</MenuItem>
										<MenuItem value='valence'>Valence</MenuItem>
										<MenuItem value='popularity'>Popularity</MenuItem>
									</Select>
									<FormHelperText>
										Pick an Audio Feature to graph
									</FormHelperText>
								</FormControl>
							</Grid>
							<Grid item>
								<br></br>
							</Grid>
							<Box className='NewBarChart-input'>
								<label htmlFor='submit-form'>
									<Button variant='contained' component='span'>
										Create Library
										<input
											id='submit-form'
											type='submit'
											style={{ display: 'none' }}
										/>
									</Button>
								</label>
							</Box>
						</form>
					</Grid>
				</Paper>
			</Container>
		);
	}
}
