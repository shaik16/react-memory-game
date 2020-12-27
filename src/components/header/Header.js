import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
	render() {
		return (
			<header>
				<div className='head-container'>
					<h2>Find the match</h2>
					<div className='game-control'>
						<button className='btn restart'>Restart</button>
						<p>
							clicks: <span className='clicks'>0</span>
						</p>
						<p>
							matches : <span className='matches'>0</span>
						</p>
						<p className='score'>
							Score : <span className='score-val'>0</span>
						</p>
					</div>
					<div className='mid-view hidden'>
						<button className='btn  hidden restart'>Restart</button>
						<p className='score'>
							Score : <span className='score-val'>0</span>
						</p>
						<img className='ham-icon' src={`${process.env.PUBLIC_URL}/icon-hamburger.svg`} alt='ham-img' />
						<img className='close-icon' src={`${process.env.PUBLIC_URL}/icon-close.svg`} alt='close-img' />
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
