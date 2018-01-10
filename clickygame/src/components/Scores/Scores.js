import React from "react";

const Scores = props => {
	return (
		<div>
		<p>Score: {props.score} | Top Score: {props.topscore}</p>
		</div>
		);
}

export default Scores;