import React, { Component } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
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
				<Auth />
			</div>
		);
	}
}

export default App;
