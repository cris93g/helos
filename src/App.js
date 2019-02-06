import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import { withRouter } from "react-router-dom";

import routes from "./routes";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav child={this.props.location.pathname} />
				{routes}
			</div>
		);
	}
}

export default withRouter(App);
