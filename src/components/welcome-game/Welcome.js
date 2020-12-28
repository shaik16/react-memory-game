import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ConfirmationBox from '../confirmationBox/ConfirmationBox';
import Leaderboard from '../leaderboard/Leaderboard';
import Button from '../ui/button/Button';
import './Welcome.css';
export class Welcome extends Component {
	state = {
		redirect: false,
		confirmation: false,
	};

	onClick = (logout) => {
		this.setState({
			confirmation: true,
		});
	};

	onYes = (yes) => {
		if (yes) {
			localStorage.clear();
			this.setState({
				redirect: true,
			});
		}
	};
	onNo = (no) => {
		if (no) {
			this.setState({
				confirmation: false,
			});
		}
	};
	render() {
		return (
			<div className='welcome-container'>
				{this.state.redirect ? <Redirect to='/login' /> : null}
				<ConfirmationBox hide={this.state.confirmation} onYes={this.onYes} onNo={this.onNo} />
				<div className='logout'>
					<Button className='logout' title='Logout' onClick={this.onClick} />
				</div>
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
					<Link to='/gamestart'>
						<Button title='START' onClick={this.props.onClick} />
					</Link>
				</div>
				<Leaderboard />
			</div>
		);
	}
}

export default Welcome;
