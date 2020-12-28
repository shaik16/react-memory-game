import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../header/Header';
import Card from '../ui/card/Card';
import './Game.css';

export class Game extends Component {
	constructor(props) {
		super(props);
		if (this.props.level === 1) {
			this.gifs = this.shuffle(this.easy);
			this.cardLength = 6;
		} else if (this.props.level === 2) {
			this.gifs = this.shuffle(this.medium);
			this.cardLength = 8;
		} else {
			this.gifs = this.shuffle(this.hard);
			this.cardLength = 12;
		}
	}
	easy = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
	medium = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
	hard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	shuffle = (gifs) => {
		let counter = gifs.length;
		while (counter > 0) {
			let index = Math.floor(Math.random() * counter);
			counter--;
			let temp = gifs[counter];
			gifs[counter] = gifs[index];
			gifs[index] = temp;
		}

		return gifs;
	};

	state = {
		id: [],
		gid: [],
		clicks: 0,
		matches: 0,
		score: 100,
		gameOver: false,
		redirect: false,
	};

	handleFlip = (id) => {
		this.setState({
			clicks: 1 + this.state.clicks,
		});
		this.setState({
			id: [...this.state.id, id],
		});
	};

	componentDidUpdate() {
		if (this.state.id.length < 2) return;
		const firstMatched = this.gifs[this.state.id[0]];
		const secondMatched = this.gifs[this.state.id[1]];
		if (firstMatched === secondMatched) {
			this.setState({
				id: [],
			});
			this.setState({
				gid: [...this.state.gid, secondMatched],
			});
			this.setState({
				matches: this.state.matches + 1,
			});
			if (this.state.matches + 1 === this.cardLength) {
				setTimeout(() => {
					this.setState({
						redirect: true,
					});
				}, 2000);
			}
		} else {
			setTimeout(() => {
				this.setState({
					id: [],
				});
				this.setState({
					score: this.state.score - 2,
				});
			}, 1000);
		}
	}
	render() {
		return (
			<div>
				{this.state.redirect ? <Redirect to='/gameover' /> : null}
				<Header score={this.state.score} clicks={this.state.clicks} matches={this.state.matches} />
				<div className='main-container'>
					{this.gifs.map((gifNumber, index) => {
						let isFlipped = false;
						let removeOnClick = false;
						if (this.state.id.includes(index)) {
							isFlipped = true;
							removeOnClick = true;
						} else {
							isFlipped = false;
							removeOnClick = false;
						}

						if (this.state.gid.includes(gifNumber)) {
							isFlipped = true;
							removeOnClick = true;
						}

						return (
							<Card
								handleFlip={this.handleFlip}
								clickStatus={removeOnClick}
								flip={isFlipped}
								key={index}
								id={index}
								gid={gifNumber}
								img={`${process.env.PUBLIC_URL}/gifs/${gifNumber}.gif`}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Game;
