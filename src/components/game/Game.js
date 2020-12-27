import React, { Component } from 'react';
import Header from '../header/Header';
import Card from '../ui/card/card';
import './Game.css';

export class Game extends Component {
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

	gifs;

	render() {
		if (this.props.level === 1) {
			this.gifs = this.shuffle(this.easy);
		} else if (this.props.level === 2) {
			console.log(this.props.level);
			this.gifs = this.shuffle(this.medium);
		} else {
			this.gifs = this.shuffle(this.hard);
		}
		return (
			<div>
				<Header />
				<div className='main-container'>
					{this.gifs.map((gifNumber, index) => (
						<Card key={index} gid={gifNumber} img={`${process.env.PUBLIC_URL}/gifs/${gifNumber}.gif`} />
					))}
				</div>
			</div>
		);
	}
}

export default Game;
