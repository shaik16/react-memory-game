import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
	render() {
		return (
			<button className='btn' onClick={this.props.onClick.bind(this, true)}>
				{this.props.title}
			</button>
		);
	}
}

export default Button;
