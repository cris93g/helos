import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
	console.log(props);
	if (props.child !== "/") {
		return (
			<div>
				<Link to="/dashboard">
					{" "}
					<button>Home</button>
				</Link>
				<Link to="/new">
					<button>New post</button>
				</Link>
				<Link to="/">
					<button>Logout</button>
				</Link>
			</div>
		);
	} else {
		return null;
	}
};
export default Nav;
