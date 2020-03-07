import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import List from './list';
import Input from './input';
import Filter from './Pages/filter';

const Main = () => {
	return (
		<BrowserRouter>
			<div>
				<center>
					<h1>Note App</h1>
					<Route exact path="/" component={Filter} />
					<Route path="/input" component={Input} />
					<Route path="/update" component={Input} />
				</center>
			</div>
		</BrowserRouter>
	);
};

export default Main;
