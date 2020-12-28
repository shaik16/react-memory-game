import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Leaderboard from '../leaderboard/Leaderboard';
import Button from '../ui/button/Button';
import './GameOver.css';

export class GameOver extends Component {
	render() {
		return (
			<div>
				<div className='welcome-container'>
					<img src='https://media.giphy.com/media/2shcntnDOwJkLGdB83/giphy.gif' alt='' />
					<h1>Game Over ! Play Again</h1>

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
			</div>
		);
	}
}

export default GameOver;
