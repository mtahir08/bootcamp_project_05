import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';


import List from './list';
import Input from './input';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Dash from './Pages/Dashboard';
import  {UserDetail} from './Pages/Dashboard';

const Main = () => {
	return (
		<BrowserRouter >
			<div>
				<center>
					<h1>Users</h1>
    			<h1>Note App</h1>
					<Route exact path="/dashboard" component={Dash} />
					<Route path="/dashboard/:userId" component={UserDetail}/>
					<Route exact path="/" component={Login} />
					<Route path="/signup" component={Signup} ></Route>
					<Route path="/input" component={Input} />
					<Route path="/update" component={Input} />
					<Route path="/dashboard" component={Dash} />
				</center>
			</div>
		</BrowserRouter>
	);
};

export default Main;
