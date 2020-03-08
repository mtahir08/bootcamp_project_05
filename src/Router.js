import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Input from './input';
import Login from './Pages/login';
import Signup from './Pages/signup';
import { CloudinaryImagePage } from './Pages/CloudinaryImagePage';
import Dash, { UserDetail } from './Pages/Dashboard';
import { ReceiptDetails } from './Pages/Receipt.Detail';
import ReceiptAdd from './Pages/receiptAdd';


const Routes = () => {
	return (
		<BrowserRouter >
			<div>
				<Route exact path="/" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/dashboard" component={Dash} />
				<Route path="/input" component={Input} />
				<Route path="/update" component={Input} />
				<Route path="/cloudinary" component={CloudinaryImagePage} />
				<Route path="/dashboard/:userId" component={UserDetail} />
				<Route path="/receipt/:userId" component={ReceiptDetails} />
				<Route exact path="/receipt/add" component={ReceiptAdd} />

			</div>
		</BrowserRouter>
	);
};

export default Routes;
