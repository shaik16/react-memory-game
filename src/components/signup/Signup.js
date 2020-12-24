import React, { Component } from 'react';

export class Signup extends Component {
	render() {
		return (
			<div>
				<div className='form-container'>
					<h1>Welcome to the Memory Game</h1>
					<form className='form'>
						<h1>Signup</h1>
						<input type='text' name='name' id='name' placeholder='Enter Your Name' />
						<span className='invalid-error'></span>
						<input type='password' name='pass' id='pass' placeholder='Enter Your Email' />
						<span className='invalid-error'></span>
						<input type='password' name='pass' id='pass' placeholder='Enter Your Password' />
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
