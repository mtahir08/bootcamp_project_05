import ActionTypes from './ActionsTypes';

const AuthAction = {
	setAdminData: (obj) => {
		console.log(obj)
		return (dispatch) => {
			const url = process.env.REACT_APP_DASHBOARDAPI;
			fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${obj.token}`
				}
			})
				.then((resposne) => resposne.json())
				.then((data) => {
					console.log("Inside Store", data)
					dispatch({ type: ActionTypes.SETADMINDATA, payload: data.data });
				})
		}
	},
	setData: (obj) => {
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
						dispatch({ type: ActionTypes.SETDATA, payload: data.data });
						return (data.data);
					}
				})
				.catch((error) => {
					alert('Login Fail');
				});
		};
	},
	add: (obj) => {
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
				.then((data) => { });
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
