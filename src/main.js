import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dash from './Pages/Dashboard';
import  {UserDetail} from './Pages/Dashboard';

const Main = () => {
	return (
		<BrowserRouter>
			<div>
				<center>
					<h1>Note App</h1>
					<Route exact path="/dashboard" component={Dash} />
					<Route path="/dashboard/:userId" component={UserDetail}/>
						
				</center>
			</div>
		</BrowserRouter>
	);
};

export default Main;
