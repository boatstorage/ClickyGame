
import React from "react";
import Scores from "../Scores";
import "./Navbar.css";

const Navbar = props => (
	<nav className="navbar sticky-top navbar-light bg-light">
	  <ul>
	  	<li>Clicky Game</li>
	  	<li>{props.message}</li>
	  	<li><Scores 
	  			score={props.score}
	  			topscore={props.topscore}

	  		/>
	  	</li>
	  </ul>
	</nav>
);

export default Navbar;