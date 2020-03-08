import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dash from './Pages/Dashboard';
import UserDetail from './Pages/UserDetail';
import Receipt from './Pages/Receipt';
import { ReceiptDetails } from './Pages/Receipt.Detail';
import receiptAdd from './Pages/receiptAdd';

const Main = () => {
	return (
		<BrowserRouter>
			<div>
				<center>
					<h1>Note App</h1>
					<Route exact path="/dashboard" component={Dash} />
					<Route path="/dashboard/:userId" component={UserDetail} />
					<Route exact path="/receipt" component={Receipt} />
					<Route path="/receipt/123/:userId" component={ReceiptDetails} />
					<Route exact path="/receipt/add" component={receiptAdd} />

				</center>
			</div>
		</BrowserRouter>
	);
};

export default Main;
