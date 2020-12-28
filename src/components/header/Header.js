import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ConfirmationBox from '../confirmationBox/ConfirmationBox';
import './Header.css';

export class Header extends Component {
	state = {
		display: false,
		confirmation: false,
		redirect: false,
	};

	displayToggle = () => {
		this.setState({
			display: !this.state.display,
		});
	};

	confirmationPopUP = () => {
		this.setState({
			confirmation: true,
		});
	};

	onYes = (yes) => {
		this.setState({
			redirect: true,
		});
	};
	onNo = (no) => {
		this.setState({
			confirmation: false,
		});
	};
	render() {
		return (
			<>
				<header>
					{this.state.redirect ? <Redirect to='/' /> : null}
					<div className='head-container'>
						<h2>Find the match</h2>
						<div className='game-control'>
							<button onClick={this.confirmationPopUP} className='btn  hidden restart'>
								Restart
							</button>
							<p>
								clicks: <span className='clicks'>{this.props.clicks}</span>
							</p>
							<p>
								matches : <span className='matches'>{this.props.matches}</span>
							</p>
							<p className='score'>
								Score : <span className='score-val'>{this.props.score}</span>
							</p>
						</div>
						<div className='mid-view hidden'>
							<button onClick={this.confirmationPopUP} className='btn  hidden restart'>
								Restart
							</button>
							<p className='score'>
								Score : <span className='score-val'>{this.props.score}</span>
							</p>
							<img
								onClick={this.displayToggle}
								className='ham-icon'
								style={{ display: `${this.state.display ? 'none' : 'flex'}` }}
								src={`${process.env.PUBLIC_URL}/icon-hamburger.svg`}
								alt='ham-img'
							/>
							<img
								onClick={this.displayToggle}
								className='close-icon'
								style={{ display: `${this.state.display ? 'flex' : 'none'}` }}
								src={`${process.env.PUBLIC_URL}/icon-close.svg`}
								alt='close-img'
							/>
						</div>

						<div className='pop-up' style={{ display: `${this.state.display ? 'flex' : 'none'}` }}>
							<p>
								clicks: <span className='clicks'>{this.props.clicks}</span>
							</p>
							<p>
								matches : <span className='matches'>{this.props.matches}</span>
							</p>
						</div>
					</div>
				</header>
				<ConfirmationBox hide={this.state.confirmation} onYes={this.onYes} onNo={this.onNo} />
			</>
		);
	}
}

export default Header;
