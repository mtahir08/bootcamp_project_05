import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Input from './input';
import Login from './Pages/login';
import Signup from './Pages/signup';
import { CloudinaryImagePage } from './Pages/CloudinaryImagePage';
import  Receipt from './Pages/Receipt';
import  {ReceiptDetails} from './Pages/Receipt.Detail';
import receiptAdd from './Pages/receiptAdd';

const Routes = () => {
	return (
		<BrowserRouter >
			<div>
				<Route exact path="/" component={Login} />
				<Route exact path="/receipt" component={Receipt}/>
				<Route exact path="/receipt/123/:userId" component={ReceiptDetails}/>
				<Route exact path="/receipt/add" component={receiptAdd}/>
				<Route exact path="/signup" component={Signup} />
				<Route path="/input" component={Input} />
				<Route path="/update" component={Input} />
				<Route path="/cloudinary" component={CloudinaryImagePage} />

			</div>
		</BrowserRouter>
	);
};

export default Routes;
