import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './Pages/login';
import Signup from './Pages/signup';
// import Input from './input';

// import { CloudinaryImagePage } from './Pages/CloudinaryImagePage';
// import Dash, { UserDetail } from './Pages/Dashboard';
// import { ReceiptDetails } from './Pages/Receipt.Detail';
// import ReceiptAdd from './Pages/receiptAdd';
import Receipt from './Pages/Receipt';
import AddReceipt from './Pages/AddReceipt';

import Side from './Sidenav'


const Routes = () => {
	return (
		<BrowserRouter >
			<div>
				<Route exact path="/" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/dashboard" component={Side} />
				<Route exact path="/receipt" component={Receipt} />
				<Route exact path="/addReceipt" component={AddReceipt} />




			</div>
		</BrowserRouter>
	);
};

export default Routes;
