import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Input from './input';
import Login from './Pages/login';
import Signup from './Pages/signup';
import { CloudinaryImagePage } from './Pages/CloudinaryImagePage';

const Routes = () => {
	return (
		<BrowserRouter >
			<div>
				<center>
					<h1>Users</h1>
					<Route exact path="/" component={Login} />
					<Route exact path="/signup" component={Signup} />
					<Route path="/input" component={Input} />
					<Route path="/update" component={Input} />
					<Route path="/cloudinary" component={CloudinaryImagePage} />
				</center>
			</div>
		</BrowserRouter>
	);
};

export default Routes;
