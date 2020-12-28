import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SuccessfulSignup from '../sucessfulSignup/SuccessfulSignup';
export class Signup extends Component {
	state = {
		name: '',
		email: '',
		pass: '',
		errors: {
			name: '',
			email: '',
			pass: '',
		},
		valid: false,
		authError: '',
		authStatus: false,
		successMessage: '',
		successStatus: false,
	};

	handleChange = (event) => {
		event.preventDefault();
		// eslint-disable-next-line no-useless-escape
		const validEmailRegex = /(\w+)\@(\w+)\.[a-zA-Z]/;

		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
			case 'name': {
				if (value.length < 4) {
					errors.name = 'username must be 4 characters long!';
				} else if (value.length > 8) {
					errors.name = 'username cannot exceed 8 characters long!';
				} else {
					errors.name = '';
				}
				break;
			}
			case 'email':
				errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
				break;
			case 'pass':
				errors.pass = value.length < 8 ? 'Password must be 8 characters long!' : '';
				break;
			default:
				break;
		}

		this.setState({ errors, [name]: value });

		const validateForm = (errors) => {
			let valid = true;
			Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
			return valid;
		};

		if (
			validateForm(this.state.errors) &&
			this.state.name.length > 0 &&
			this.state.email.length > 0 &&
			this.state.pass.length > 0
		) {
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
			.post('https://react-memory-game-api.herokuapp.com/api/signup', {
				name: this.state.name,
				email: this.state.email,
				password: this.state.pass,
			})
			.then((res) => {
				this.setState({
					successStatus: true,
					successMessage: res.data.message,
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
			<div>
				{this.state.successStatus ? (
					<SuccessfulSignup message={this.state.successMessage} />
				) : (
					<div className='form-container'>
						<h1>Welcome to the Memory Game</h1>
						<form onSubmit={this.handleSubmit} className='form'>
							<div className='auth-error' style={{ display: `${this.state.authStatus ? 'block' : 'none'}` }}>
								{this.state.authError}
							</div>
							<h1>Signup</h1>
							<input
								type='text'
								name='name'
								id='name'
								onChange={this.handleChange}
								placeholder='Enter username'
								autoComplete='off'
							/>
							<span className='invalid-error'>{this.state.errors.name}</span>
							<input
								type='email'
								name='email'
								id='pass'
								onChange={this.handleChange}
								placeholder='Enter Your Email'
								autoComplete='off'
							/>
							<span className='invalid-error'>{this.state.errors.email}</span>
							<input
								type='password'
								name='pass'
								id='pass'
								onChange={this.handleChange}
								placeholder='Enter Your Password'
							/>
							<span className='invalid-error'>{this.state.errors.pass}</span>
							<button className='btn' type='submit' disabled={this.state.valid ? false : true}>
								signup
							</button>
							<span className='login-router'>
								<Link className='link' to='/login'>
									Already have an account? login!
								</Link>
							</span>
						</form>
					</div>
				)}
			</div>
		);
	}
}

export default Signup;
