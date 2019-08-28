import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

//style imports
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

export default class Comment extends Component {
	state = {
		comment: {},
		isEditFormDisplayed: false,
		redirectToBarChart: false
	};

	componentDidMount() {
		this.getComment();
	}

	getComment() {
		axios
			.get(
				`/api/barCharts/${this.props.match.params.barChartId}/comments/${
					this.props.match.params.commentId
				}`
			)
			.then(res => {
				this.setState({ comment: res.data });
			});
	}

	handleInputChange = event => {
		const copiedComment = { ...this.state.comment };
		copiedComment[event.target.name] = event.target.value;

		this.setState({ comment: copiedComment });
	};

	handleSubmit = event => {
		event.preventDefault();
		axios
			.put(
				`/api/barCharts/${this.props.match.params.barChartId}/comments/${
					this.props.match.params.commentId
				}`,
				this.state.comment
			)
			.then(res => {
				this.setState({
					comment: res.data,
					redirectToBarChart: true
				});
			});
	};

	handleToggleEditForm = () => {
		this.setState(state => {
			return { isEditFormDisplayed: !state.isEditFormDisplayed };
		});
	};

	handleDeleteComment = () => {
		axios
			.delete(
				`/api/barCharts/${this.props.match.params.barChartId}/comments/${
					this.props.match.params.commentId
				}`
			)
			.then(() => {
				this.setState({ redirectToBarChart: true });
			});
	};
	render() {
		if (this.state.redirectToBarChart) {
			return (
				<Redirect to={`/barcharts/${this.props.match.params.barChartId}`} />
			);
		}
		return this.state.isEditFormDisplayed ? (
			<Container>
				<form onSubmit={this.handleSubmit}>
					<div>
						<TextField
							id='outlined-commenet-input'
							multiline
							label='Comment'
							className='textField'
							type='text'
							name='comment'
							autoComplete='Your comment...'
							margin='normal'
							variant='outlined'
							onChange={this.handleInputChange}
							value={this.state.comment.comment}
						/>
					</div>
					<div>
						<TextField
							id='outlined-author-input'
							label='Author'
							className='textField'
							type='text'
							name='author'
							autoComplete='Your name...'
							margin='normal'
							variant='outlined'
							onChange={this.handleInputChange}
							value={this.state.comment.author}
						/>
						<input type='submit' value='Save' />
					</div>
				</form>
			</Container>
		) : (
			<div>
				<p>{this.state.comment.comment}</p>
				<p>By: {this.state.comment.author}</p>
				<Button color='primary' size='small' onClick={this.handleToggleEditForm}>Edit</Button>
				<Button color='primary' size='small' onClick={this.handleDeleteComment}>Delete</Button>
			</div>
		);
	}
}
