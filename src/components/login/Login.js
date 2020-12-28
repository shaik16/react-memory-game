import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export class Login extends Component {
	state = {
		email: '',
		pass: '',
		errors: {
			email: '',
			pass: '',
		},
		valid: false,
		authError: '',
		authStatus: false,
		redirect: false,
	};

	handleChange = (event) => {
		event.preventDefault();
		// eslint-disable-next-line no-useless-escape
		const validEmailRegex = /(\w+)\@(\w+)\.[a-zA-Z]/;

		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
			case 'email':
				errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
				break;
			case 'pass':
				errors.pass = value.length < 7 ? 'Password must be 8 characters long!' : '';
				break;
			default:
				break;
		}
		this.setState({ errors, [name]: value });

		const validateForm = (errors) => {
			let valid = true;
			Object.values(errors).forEach(
				// if we have an error string set valid to false
				(val) => val.length > 0 && (valid = false)
			);
			return valid;
		};

		if (validateForm(this.state.errors) && this.state.email.length > 0 && this.state.pass.length > 0) {
			this.setState({
				valid: true,
			});
		} else {
			this.setState({
				valid: false,
			});
		}
	};

	handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post('https://react-memory-game-api.herokuapp.com/api/login', {
				email: this.state.email,
				password: this.state.pass,
			})
			.then((res) => {
				const { id, accessToken, name, email } = res.data;
				localStorage.setItem('user_id', id);
				localStorage.setItem('accessToken', accessToken);
				localStorage.setItem('user_name', name);
				localStorage.setItem('email', email);
				this.setState({
					redirect: true,
				});
			})
			.catch((err) => {
				this.setState({
					authStatus: true,
					authError: err.response.data.message,
				});
				setTimeout(() => {
					this.setState({
						authStatus: false,
						authError: '',
					});
				}, 4000);
			});
	};

	render() {
		return (
			<div className='form-container'>
				{this.state.redirect ? <Redirect to='/' /> : null}
				<h1>Welcome to the Memory Game</h1>
				<form className='form' onSubmit={this.handleSubmit}>
					<div className='auth-error' style={{ display: `${this.state.authStatus ? 'block' : 'none'}` }}>
						{this.state.authError}
					</div>
					<h1>Login</h1>
					<input
						type='email'
						name='email'
						id='name'
						placeholder='Enter Your Email'
						onChange={this.handleChange}
						autoComplete='off'
					/>
					<span className='invalid-error'>{this.state.errors.email}</span>
					<input
						type='password'
						name='pass'
						id='pass'
						placeholder='Enter Your Password'
						onChange={this.handleChange}
					/>
					<span className='invalid-error'>{this.state.errors.pass}</span>
					<button className='btn' type='submit' disabled={this.state.valid ? false : true}>
						Login
					</button>
					<span className='signup-router'>
						<Link className='link' to='/signup'>
							Don't have an account? Signup
						</Link>
					</span>
				</form>
			</div>
		);
	}
}

export default Login;
