import React, { Component } from 'react';
// import './Trackcard.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

//style imports
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile'

const styles = {
	card: {
		maxWidth: '185.25px',
		maxHeight: '300px',
		padding: '0',
		boxSizing: 'border-box'
	},
	content: {
		height: '60px',
		boxSizing: 'border-box',
		overflow: 'scroll',
		background: '#121212;'
	},
	actions: {}
};

export default class Trackcard extends Component {
	state = {
		redirectToBarChart: false
	};

	addTrackToBarChart = () => {
		axios
			.post(`/api/barCharts/${this.props.barChartId}/tracks`, this.props.track)
			.then(res => {
				this.setState({ redirectToBarChart: true });
			});
	};

	deleteTrack = () => {
		axios
			.delete(
				`/api/barCharts/${this.props.barChartId}/tracks`,
				this.props.track._id
			)
			.then(res => console.log(res));
	};

	render() {

		const imgUrl = this.props.imgUrl || this.props.track.album.images[1].url;

		return (
			<GridListTile>
				<Card className='Trackcard card' style={styles.card}>
					<CardActionArea>
						<CardMedia
							component='img'
							className='media'
							image={imgUrl}
							title='album cover'
						/>
						<CardContent style={styles.content}>
							<Typography variant='body2' color='textSecondary' component='p'>
								{this.props.track.name}
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								{this.props.track.artists[0].name}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions style={styles.actions}>
						<Button
							size='small'
							color='primary'
							onClick={this.addTrackToBarChart}>
							Add
						</Button>
						{/* <button onClick={this.addTrackToBarChart}>Add</button> */}
					</CardActions>
				</Card>
			</GridListTile>
		);
	}
}
