import React, { Component } from 'react';

export class Login extends Component {
	render() {
		return (
			<div className='form-container'>
				<h1>Welcome to the Memory Game</h1>
				<form className='form'>
					<h1>Login</h1>
					<input type='text' name='name' id='name' placeholder='Enter Your Email' />
					<span className='invalid-error'></span>
					<input type='password' name='pass' id='pass' placeholder='Enter Your Password' />
					<span className='invalid-error'></span>
					<button className='btn' type='submit'>
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
