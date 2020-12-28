import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SuccessfulSignup.css';

export class SuccessfulSignup extends Component {
	render() {
		return (
			<div className='container'>
				<div className='success'>
					<h3>{this.props.message}</h3>
					<Link to='/login'>
						<button className='btn'>Login</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default SuccessfulSignup;
