import ActionTypes from './ActionsTypes';
import { useHistory } from "react-router-dom";

const AuthAction = {
	setData: (obj) => {
		console.log(obj);
		// let history = useHistory();
		// 				console.log(history);
		return (dispatch) => {
			const url = process.env.REACT_APP_LOGINAPI;
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: `${obj.email}`,
					password: `${obj.password}`
				})
			})
				.then((resposne) => resposne.json())
				.then((data) => {
					if (data.data.token) {
						console.log(data.data.user.role);
						localStorage.setItem('token', data.data.token);
						dispatch({ type: ActionTypes.SETDATA, payload: data.data });
						return(data.data);
					// if(data.data.user.role == "S"){
					// 	alert('login Successful Student')
					// } else {
					// 	alert('login Successful admin')
					// }
						// 	{data.data.user.role == "S" ? {
					// alert('login Successful')}: null }
					}
				})
				.catch((error) => {
					console.log({ error });
					alert('Login Fail');
				});
		};
	},
	add: (obj) => {
		console.log(obj);
		return (dispatch) => {
			let url = process.env.REACT_APP_SIGNUPAPI;
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: obj.name,
					email: `${obj.email}`,
					password: `${obj.password}`
				})
			})
				.then((resposne) => resposne.json())
				.then((data) => {
					console.log(data);
				});
		};
	}
};

export default AuthAction;
