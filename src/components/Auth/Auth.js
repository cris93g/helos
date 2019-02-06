import React, { Component } from "react";

class Auth extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		};
	}
	render() {
		return (
			<div className="App">
				<input placeholder="username" />
				<input>password</input>
			</div>
		);
	}
}

export default Auth;
