import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import List from './list';
import Input from './input';
import Dash from './Pages/Dashboard/Dashboard';

const Main = () => {
	return (
		<BrowserRouter>
			<div>
				<center>
					<h1>Note App</h1>
					<Route exact path="/" component={List} />
					<Route path="/input" component={Input} />
					<Route path="/update" component={Input} />
					<Route path="/dashboard" component={Dash} />
				</center>
			</div>
		</BrowserRouter>
	);
};

export default Main;
