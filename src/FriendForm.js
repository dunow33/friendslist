import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './FriendList';
import { API_BASE} from './constants';

class FriendForm extends Component {

	constructor(props) {
		super(props);
		this.state = { friends: [] }
		axios.get(API_BASE)
			.then(response => {
				this.setState({ friends: response.data });
				this.renderFriendsList(this.state.friends);
		});

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		var name = this.refs.name.value;
		var age = this.refs.age.value;
		var friendsTemp = this.state.friends;
		axios.post(API_BASE, { name, age })
			.then( response => {
				friendsTemp.push(response.data);
				this.setState({ friends: friendsTemp });
				this.renderFriendsList(this.state.friends);
				this.refs.name.value = "";
				this.refs.age.value = "";
			});
		}

	renderFriendsList() {
		return <FriendList props = { this.state.friends } />
	}

	render() {
		return (
			<div>
				<div className="col-xs-4">
					<form onSubmit={this.handleSubmit.bind(this)}>

					</form>
				</div>
			</div>
		)
	}
}