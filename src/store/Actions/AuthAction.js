import ActionTypes from './ActionsTypes';

const AuthAction = {
	setData: (obj) => {
		console.log(obj);
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
						console.log(data);
						localStorage.setItem('token', data.data.token);
						dispatch({ type: ActionTypes.SETDATA, payload: data.data });
					}
				})
				.catch((error) => {
					console.log({ error });
					alert('please log in again');
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
	},
	edit: (obj) => {
		console.log(obj);
		return (dispatch) => {
			let url = process.env.REACT_APP_DASHBOARDAPI;
			fetch(url, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + localStorage.getItem('token')
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
