import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import StudentDashboard from './Pages/studentDashboard';
import Login from './Pages/login';
import Signup from './Pages/signup';
// import Input from './input';

// import Dash, { UserDetail } from './Pages/Dashboard';
import ReceiptDetails from "./Pages/ReceiptDetail";
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
				<Route exact path="/home" component={StudentDashboard} />
				<Route exact path="/dashboard" component={Side} />
				<Route exact path="/receipt" component={Receipt} />
				<Route exact path="/addReceipt" component={AddReceipt} />
				<Route exact path="/receipt/:userId" component={ReceiptDetails} />




			</div>
		</BrowserRouter>
	);
};

export default Routes;
