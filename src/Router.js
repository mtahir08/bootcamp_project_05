import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import List from './list';
import Input from './input';
import Filter from './Pages/filter';
import { CloudinaryImagePage } from './Pages/CloudinaryImagePage';

const Routes = () => {
	return (
		<BrowserRouter >
			<div>
				<center>
					<h1>Users</h1>
					<Route exact path="/" component={Filter} />
					<Route path="/input" component={Input} />
					<Route path="/update" component={Input} />
					<Route path="/cloudinary" component={CloudinaryImagePage} />
				</center>
			</div>
		</BrowserRouter>
	);
};

export default Routes;
