import React, { Component } from 'react';
import axios from 'axios';
import './Leaderboard.css';
import Table from '../ui/table/Table';
import { Redirect } from 'react-router-dom';

export class Leaderboard extends Component {
	state = {
		easy: [],
		medium: [],
		hard: [],
		redirect: false,
	};

	componentDidMount() {
		axios
			.get('https://react-memory-game-api.herokuapp.com/api/', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			})
			.then((res) => {
				const easy = res.data.filter((obj) => {
					return obj.level === 1;
				});
				const medium = res.data.filter((obj) => {
					return obj.level === 2;
				});
				const hard = res.data.filter((obj) => {
					return obj.level === 3;
				});

				this.setState({
					easy,
					medium,
					hard,
				});
			})
			.catch((err) => {
				this.setState({
					redirect: true,
				});
			});
	}

	componentDidUpdate() {
		if (this.state.easy.length > 0) {
			localStorage.setItem('easyScore', this.state.easy[0].highscore);
		} else {
			localStorage.setItem('easyScore', '');
		}

		if (this.state.medium.length > 0) {
			localStorage.setItem('mediumScore', this.state.medium[0].highscore);
		} else {
			localStorage.setItem('mediumScore', '');
		}

		if (this.state.hard.length > 0) {
			localStorage.setItem('hardScore', this.state.hard[0].highscore);
		} else {
			localStorage.setItem('hardScore', '');
		}
	}

	render() {
		return (
			<>
				{this.state.redirect ? <Redirect to='/login' /> : null}
				<h1 className='leaderboard-head'>Leader Board</h1>
				<div className='leaderboard'>
					<div className='easy'>
						<h3>Easy</h3>
						<table className='easy-table' align='right'>
							<thead>
								<tr>
									<th>Name</th>
									<th>Score</th>
								</tr>
							</thead>
							{this.state.easy.map((obj, index) => {
								return <Table key={index} name={obj.name} highscore={obj.highscore} />;
							})}
						</table>
					</div>
					<div className='medium'>
						<h3>Medium</h3>
						<table className='medium-table' align='right'>
							<tr>
								<th>Name</th>
								<th>Score</th>
							</tr>
							{this.state.medium.map((obj, index) => {
								return <Table key={index} name={obj.name} highscore={obj.highscore} />;
							})}
						</table>
					</div>
					<div className='hard'>
						<h3>Hard</h3>
						<table className='hard-table' align='right'>
							<tr>
								<th>Name</th>
								<th>Score</th>
							</tr>
							{this.state.hard.map((obj, index) => {
								return <Table key={index} name={obj.name} highscore={obj.highscore} />;
							})}
						</table>
					</div>
				</div>
			</>
		);
	}
}

export default Leaderboard;
