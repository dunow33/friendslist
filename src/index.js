import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div className="row">
		<App>
			<Header />
		</App>
	</div>, 
	document.getElementById('root'));
registerServiceWorker();
