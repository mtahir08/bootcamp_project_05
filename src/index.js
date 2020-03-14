import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Routes from './Router';
import Headerbar from './Pages/Headerbar'
import * as serviceWorker from './serviceWorker';
import MyStore from './store';


ReactDOM.render(
	<Provider store={MyStore}>
		
		<Routes />
		
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
