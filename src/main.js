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
					<h1 >Note App</h1>
					<Route exact path="/list" component={List} />
					<Route exact path="/" component={Filter} />
					<Route path="/input" component={Input} />
					<Route path="/update" component={Input} />
				</center>
			</div>
		</BrowserRouter>
	);
};

export default Main;

// token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTY0OTIwYWEyZDkwYTAwMDRhYmUxNDEiLCJleHAiOjE1ODM2NTI5MTksImlhdCI6MTU4MzY0OTMxOX0.HDpQVnvPGu_HgCgMuu2A1QDO2aP7VXOzaJI2_LPk35c"
// fetch(url, {
// 	method: 'POST',
// 	headers: {
// 		// 'Content-Type': 'application/json',
// 		'Authorization':`Bearer ${token}`
// 	},
// 	body: JSON.stringify(obj)
// })