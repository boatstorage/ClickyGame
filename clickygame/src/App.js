import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import BaseCard from "./components/BaseCard";
import CardContainer from "./components/CardContainer";

// import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

let clickedCard = [];

let characterIdArray = characters;


class App extends Component {
	state = {
		score: 0,
		topscore: 0,
		message: "Click an image to begin!",
		characterOrder: characters
	};

	shuffleCharacters = () => {
		characterIdArray = [];
		let numArray = [];
		console.log(characterIdArray);

		for (var i = 0; numArray.length < 12; i++) {
			let num = Math.floor(Math.random() * (12 -1 +1));
			if (!numArray.includes(num)) {
				numArray.push(num);
				characterIdArray.push(characters[num]);
			}
		}
		console.log(characterIdArray);
	};

	handleIncrementTopscore = () => {
		if (this.state.score >= this.state.topscore) {
			this.setState({topscore: this.state.topscore + 1});
		}
	};

	handleIncrementScore = id => {
		this.shuffleCharacters();

		if (clickedCard.includes(id)) {
			this.setState({score:0});
			this.setState({message: "You guessed incorrectly!"});
			clickedCard = [];
		} else {
			this.setState({score: this.state.score + 1});
			this.setState({message: "You guessed correctly!"});
			this.handleIncrementTopscore();
			clickedCard.push(id);
		}
	};

	render() {
		return (
			<div> 
				<Navbar
					score={this.state.score}
					topscore={this.state.topscore}
					message={this.state.message}
				/>
				<Header />
				<CardContainer>
					{characterIdArray.map(character => (
						<BaseCard 
							handleIncrementScore={this.handleIncrementScore}
							handleIncrementTopscore={this.handleIncrementTopscore}
							id={character.id}
							image={character.image}
							name={character.name}

						/>
							))}
				</CardContainer>
		
			</div>
			);
	}
}

export default App;

