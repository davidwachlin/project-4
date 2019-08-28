import React, { Component } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

//style imports
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { ListItem } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

export default class BarCharts extends Component {
	state = {
		barCharts: []
	};

	componentDidMount() {
		this.getAllBarCharts();
	}

	getAllBarCharts = () => {
		axios.get('/api/barCharts').then(res => {
			console.log(res);
			this.setState({ barCharts: res.data });
		});
	};

	render() {
		let barChartsList = this.state.barCharts.map(barchart => {
			return (
				<Grid item key={barchart._id} xs={12} sm={6}>
					<CardActionArea component='a' href={`/barcharts/${barchart._id}`}>
						<Card>
							<CardContent>
								<Typography variant='h5' gutterBottom>
									<Link
										component={RouterLink}
										to={`/barcharts/${barchart._id}`}>
										{barchart.name}
									</Link>
								</Typography>
								<Divider></Divider>
								<Typography variant='subtitle1' component='p'>
									<br />
									{barchart.description}
									<br />
								</Typography>
							</CardContent>
						</Card>
					</CardActionArea>
				</Grid>
			);
		});
		return (
			<Container>
				<h1>All BarCharts</h1>
				<Button size='small'>
					<Link component={RouterLink} to='/barcharts/new'>
						New BarChart
					</Link>
				</Button>
				<Grid container spacing={4} className='cardGrid'>
					{barChartsList}
				</Grid>
			</Container>
		);
	}
}
