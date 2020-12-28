import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from '../game/Game';
import GameOver from '../gameover/GameOver';
import Login from '../login/Login';
import Protected from '../protected/Protected';
import Signup from '../signup/Signup';
import Welcome from '../welcome-game/Welcome';

export class Auth extends Component {
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
				<Router>
					<Switch>
						<Route path='/' exact>
							<Protected>
								<Welcome value={this.state.level} handleLevel={this.handleLevel} onClick={this.handleStart} />
							</Protected>
						</Route>
						<Route path='/login' component={Login} />
						<Route path='/Signup' component={Signup} />
						<Route path='/gamestart'>
							<Protected>
								<Game level={this.state.level} />
							</Protected>
						</Route>
						<Route path='/gameover'>
							<Protected>
								<GameOver value={this.state.level} onClick={this.handleStart} />
							</Protected>
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Auth;
