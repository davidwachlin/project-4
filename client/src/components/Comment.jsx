import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
					isEditFormDisplayed: false
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
            return <Redirect to={`/${this.props.match.params.barChartId}`} />;
        }
        return this.state.isEditFormDisplayed 
        ? (<form onSubmit={this.handleSubmit}>
					<div>
                    <label htmlFor='comment'>Comment</label>
					<input
						onChange={this.handleInputChange}
						type='text'
						id='comment'
						name='comment'
						value={this.state.comment.comment}
						placeholder='Enter name'
					/>
                    </div>
                    <div>
					<label htmlFor='author'>Author</label>
					<input
						onChange={this.handleInputChange}
						type='text'
						id='author'
						name='author'
						value={this.state.comment.author}
						placeholder='Enter name'
					/>
                    <input type='submit'>Save</input>
                    </div>

        </form>
        ) : (
            <div>
                <p>{this.state.comment.comment}</p>
                <p>By: {this.state.comment.author}</p>
            </div>
        )
	}
}
