import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
	render() {
		return (
			<div
				onClick={!this.props.clickStatus ? this.props.handleFlip.bind(this, this.props.id) : null}
				className={`card ${this.props.flip ? 'flip' : null}`}>
				<div className='back'>
					<h1>?</h1>
				</div>
				<img className='front' src={this.props.img} alt='' />
			</div>
		);
	}
}

export default Card;
