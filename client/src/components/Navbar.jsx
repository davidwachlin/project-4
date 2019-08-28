import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import logo from '../Spotify_logo_without_text.svg';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2),
		height: '50px'
	},
	title: {
		flexGrow: 1
	}
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default'>
				<Toolbar>
					<Avatar alt='spotify logo' src={logo} className={classes.bigAvatar} />
					<Button>
						<Typography className={classes.title} variant='h6' noWrap>
							<Link
								to={'/home'}
								style={{ color: 'white', textDecoration: 'none' }}>
								SpotiViz
							</Link>
						</Typography>
					</Button>
					<Button color='primary'>
						<Typography className={classes.title} variant='h6' noWrap>
							<Link
								to={'/barcharts'}
								style={{
									color: 'white',
									textDecoration: 'none',
									// textDecorationColor: 'green'
								}}>
								TrackGraphs
							</Link>
						</Typography>
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
