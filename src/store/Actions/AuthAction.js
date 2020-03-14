import ActionTypes from './ActionsTypes';

const AuthAction = {
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
						localStorage.setItem("token", data.data.token)
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
};

export default AuthAction;
