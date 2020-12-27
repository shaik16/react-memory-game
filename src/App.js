import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome-game/Welcome';
import Game from './components/game/Game';
export class App extends Component {
	state = {
		startStatus: false,
		level: 1,
	};

	handleStart = () => {
		this.setState({
			startStatus: true,
		});
	};

	handleLevel = (event) => {
		this.setState({
			level: Number(event.target.value),
		});
	};

	render() {
		return (
			<div>
				{this.state.startStatus ? (
					<Game level={this.state.level} />
				) : (
					<Welcome value={this.state.level} handleLevel={this.handleLevel} onClick={this.handleStart} />
				)}
			</div>
		);
	}
}

export default App;
