import React, { Component } from 'react';
import './Card.css';

export class card extends Component {
	state = {
		flip: false,
	};

	handleFlip = () => {
		this.setState({
			flip: !this.state.flip,
		});
	};
	render() {
		return (
			<div onClick={this.handleFlip} className={`card ${this.state.flip ? 'flip' : null}`}>
				<div className='back'>
					<h1>?</h1>
				</div>
				<img className='front' src={this.props.img} alt='' />
			</div>
		);
	}
}

export default card;
