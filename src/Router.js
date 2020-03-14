import React,{useContext} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import StudentDashboard from './Pages/studentDashboard';
import Login from './Pages/login';
import Signup from './Pages/signup';
// import Input from './input';
import ThemeContext from '../src/ThemeContext';
import AppTheme from "../src/Colors";

// import { CloudinaryImagePage } from './Pages/CloudinaryImagePage';
// import Dash, { UserDetail } from './Pages/Dashboard';
// import { ReceiptDetails } from './Pages/Receipt.Detail';
// import ReceiptAdd from './Pages/receiptAdd';
import Side from './Sidenav'


const Routes = () => {
	const [theme, setContext] = useContext(ThemeContext);
	const currentTheme = AppTheme[theme];   

	return (
		<BrowserRouter >
			<div style = {{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
        }}> 
				<Route exact path="/" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/studentDashboard" component={StudentDashboard} />
				<Route exact path="/dashboard" component={Side} />
			</div>
		</BrowserRouter>
	);
};

export default Routes;
