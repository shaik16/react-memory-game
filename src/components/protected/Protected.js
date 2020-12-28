import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class Protected extends Component {
	state = {
		accessToken: localStorage.getItem('accessToken'),
	};

	render() {
		return <div>{this.state.accessToken ? this.props.children : <Redirect to='login' />}</div>;
	}
}

export default Protected;
