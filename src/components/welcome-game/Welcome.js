import React, { Component } from 'react';
import Button from '../ui/button/Button';
import './Welcome.css';

export class Welcome extends Component {
	render() {
		return (
			<div className='welcome-container'>
				<img src='https://media.giphy.com/media/2shcntnDOwJkLGdB83/giphy.gif' alt='' />
				<h1>Welcome!</h1>
				<h4>Select the level and Click on start...</h4>
				<h4>To start your journey into the memory-game</h4>
				<div className='game-start'>
					<select onChange={this.props.handleLevel} defaultValue={this.props.value}>
						<option value='1'>easy</option>
						<option value='2'>medium</option>
						<option value='3'>hard</option>
					</select>
					<Button title='START' onClick={this.props.onClick} />
				</div>
			</div>
		);
	}
}

export default Welcome;
