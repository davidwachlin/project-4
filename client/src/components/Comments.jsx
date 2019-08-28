import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

export default class Comments extends Component {
	state = {
		showComments: false,
		comments: [],
		newComment: {
			comment: '',
			author: ''
		},
		isNewCommentFormDisplayed: false
	};

	componentDidMount() {
		this.getCommments();
	}

	getCommments = () => {
		axios.get(`/api/barCharts/${this.props.barChartId}/comments`).then(res => {
			this.setState({ comments: res.data });
		});
	};

	handleToggleNewCommentForm = () => {
		this.setState(state => {
			return { isNewCommentFormDisplayed: !state.isNewCommentFormDisplayed };
		});
	};

	handleInputChange = e => {
		const newComment = { ...this.state.newComment };
		newComment[e.target.name] = e.target.value;
		this.setState({ newComment: newComment });
	};

	handleCommentSubmit = event => {
		event.preventDefault();
		axios
			.post(
				`/api/barCharts/${this.props.barChartId}/comments`,
				this.state.newComment
			)
			.then(() => {
				this.handleToggleNewCommentForm();
				this.getCommments();
			});
	};

	render() {
		let commentList = this.state.comments.map(comment => (
			<Card key={comment._id}>
				<Typography variant='subtitle1' component='p'>
					{comment.comment}
				</Typography>
				<Typography variant='subtitle2' component='p'>
					<p>By: {comment.author}</p>
				</Typography>
				<Button>
					<Link
						to={`/barcharts/${this.props.barChartId}/comments/${comment._id}`}>
						View/Edit
					</Link>
				</Button>
			</Card>
		));
		return (
			<div>
				{this.state.isNewCommentFormDisplayed ? (
					<form onSubmit={this.handleCommentSubmit}>
						<label htmlFor='comment'>Comment</label>
						<input
							onChange={this.handleInputChange}
							type='text'
							id='comment'
							name='comment'
							value={this.state.newComment.comment}
						/>

						<label htmlFor='author'>Author</label>
						<input
							onChange={this.handleInputChange}
							type='text'
							id='author'
							name='author'
							value={this.state.newComment.author}
						/>
						<input type='submit' value='Add' />
					</form>
				) : (
					<div>
						<h5>Comments</h5>
						{commentList}

						<Button
							variant='outlined'
							color='primary'
							onClick={this.handleToggleNewCommentForm}>
							New Comment
						</Button>
					</div>
				)}
			</div>
		);
	}
}
