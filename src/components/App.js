import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import './App.css';

import Dashboard from './Dashboard';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { loading } = this.props;

		if (loading) {
			return <h3>Loading...</h3>
		}

		return (
			<div className="App">
				<Dashboard />
			</div>
		);
	}
}

export default connect()(App);