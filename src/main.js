import React from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom';

import List from './list';
import Input from './input';
import Dashboard from './Pages/Dashboard';
import {UserDetail} from './Pages/Dashboard';

const Main = () => {
	return (
		<BrowserRouter>
			<div>
				<center>
					<h1>Note App</h1>
					<Route exact path="/" component={List} />
					<Route path="/input" component={Input} />
					<Route path="/update" component={Input} />
					<Route exact path="/dashboard" component={Dashboard}/>
					<Route path="/dashboard/:userId">
						<UserDetail/>
					</Route>
				</center>
			</div>
		</BrowserRouter>
	);
};

export default Main;
