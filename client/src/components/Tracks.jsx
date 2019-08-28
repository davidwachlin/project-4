import React from 'react';
import Trackcard from './Trackcard';

//style imports
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden'
		// backgroundColor: theme.palette.background.paper
	},
	gridList: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)'
	},
	title: {
		color: theme.palette.primary.light
	},
	titleBar: {
		background:
			'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
	}
}));
export default function Tracks(props) {
	const classes = useStyles();

	console.log('from Tracks, props:', props);
	// const imgUrl = track.album[0].images[1].url || track.album.images[1].url

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={2.5}>
				{props.tracks.map(track => {
					return (
						<Trackcard
							key={track._id}
							track={track}
							barChartId={props.barChartId}
							imgUrl={track.album.images[1].url || track.album[0].images[1].url}
						/>
					);
				})}
			</GridList>
		</div>
	);
}
