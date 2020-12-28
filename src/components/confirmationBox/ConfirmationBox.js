import React, { Component } from 'react';
import './ConfirmationBox.css';

export class ConfirmationBox extends Component {
	render() {
		return (
			<div className='confirmation-container' style={{ display: `${this.props.hide ? 'flex' : 'none'}` }}>
				<div className='confirmation'>
					<h4>Are you sure? you want to restart?</h4>
					<div className='btn-group'>
						<button onClick={this.props.onYes.bind(this, true)} class='btn yes'>
							yes
						</button>
						<button onClick={this.props.onNo.bind(this, true)} class='btn no'>
							no
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ConfirmationBox;
