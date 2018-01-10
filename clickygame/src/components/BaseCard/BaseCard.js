import React from "react";
// import Scores from "../Scores";
import "./BaseCard.css";


const BaseCard = props => {
	return (
	<div className="basecard">
		<div onClick={() => props.handleIncrementScore(props.id)} key={props.id} className="img-container">
			<img alt={props.name} src={props.image} />
		</div>
	</div>
	);
};

export default BaseCard;