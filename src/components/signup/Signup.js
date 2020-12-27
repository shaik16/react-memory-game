import React, { Component } from 'react';

export class Signup extends Component {
	state = {
		name: '',
		email: '',
		pass: '',
		nameError: '',
	};

	handleSubmit = (event) => {
		event.preventDefault();
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		console.log(this.state);
	};

	handleBlur = (event) => {
		if (this.state.name === '') {
			this.setState({
				nameError: 'Required',
			});
		} else {
			this.setState({
				nameError: '',
			});
		}
	};

	render() {
		return (
			<div>
				<div className='form-container'>
					<h1>Welcome to the Memory Game</h1>
					<form onSubmit={this.handleSubmit} className='form'>
						<h1>Signup</h1>
						<input
							type='text'
							name='name'
							id='name'
							onChange={this.handleChange}
							onBlur={this.handleBlur}
							placeholder='Enter Your Name'
						/>
						<span className='invalid-error'>{this.state.nameError}</span>
						<input
							type='password'
							name='email'
							id='pass'
							onChange={this.handleChange}
							placeholder='Enter Your Email'
						/>
						<span className='invalid-error'></span>
						<input
							type='password'
							name='pass'
							id='pass'
							onChange={this.handleChange}
							placeholder='Enter Your Password'
						/>
						<span className='invalid-error'></span>
						<button className='btn' type='submit'>
							signup
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Signup;
