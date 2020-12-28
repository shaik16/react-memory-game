import React, { Component } from 'react';
import './Table.css';

export class Table extends Component {
	render() {
		return (
			<tbody>
				<tr>
					<td>{this.props.name}</td>
					<td>{this.props.highscore}</td>
				</tr>
			</tbody>
		);
	}
}

export default Table;
