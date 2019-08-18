import React, { Component } from 'react';
import getHashAndRedirect from '../helpers';
import logo from '../Spotify_logo_without_text.svg';
import { Link, Redirect } from 'react-router-dom'

// import "./Login.css";

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'baf17787c2f143b594964abf61d5ae74';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-read-currently-playing', 'user-read-playback-state'];

class Login extends Component {
	constructor() {
		super();
		this.state = {
			token: null
		};
	}
	componentDidMount() {
		// Set token
		const hash = getHashAndRedirect;
		let _token = hash.access_token;
		if (_token) {
			localStorage.setItem('token', _token);
			this.setState({
				token: _token
			});
		}
	}
	render() {
		return (
			<div className='Login'>
				<header className='Login-header'>
					<img src={logo} className='Login-logo' alt='logo' />
					{!this.state.token && (
						<a
							className='btn btn--login Login-link'
							href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
								'%20'
							)}&response_type=token&show_dialog=true`}>
							Login to Spotify
						</a>
					)}
					{this.state.token && (
						<Redirect to='/home' />
					)}
				</header>
			</div>
		);
	}
}
export default Login;
