import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './FriendList';
import { API_BASE} from './constants';

class FriendForm extends Component {

	super(props);
	this.state = { friends: [] }
	axios.get(API_BASE)
		.then(response => {
			this.setState({ friends: response.data });
			this.renderFriendsList(this.state.friends);
	});

	this.handleSubmit = this.handleSubmit.bind(this);
}