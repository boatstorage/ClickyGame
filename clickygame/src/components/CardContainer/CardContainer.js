import React from "react";
import "./CardContainer.css";

const CardContainer = props => (
	<div className="row d-flex justify-content-center">
		<div className="col-md-7">
			<div className="char-container">{props.children}</div>
		</div>
	</div>
	);

export default CardContainer;