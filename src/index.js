import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import FriendForm from './FriendForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div className="row">
		<App>
			<Header />
			<FriendForm />
		</App>
	</div>, 
	document.getElementById('root'));
registerServiceWorker();