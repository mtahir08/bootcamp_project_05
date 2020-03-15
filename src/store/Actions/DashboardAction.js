import ActionTypes from './ActionsTypes';

const DashboardAction = {
	getRecipt: () => {
		return (dispatch, getState) => {
			const token = getState().authReducer.token
			const urlReceipt = process.env.REACT_APP_ENDPOINT + 'api/receipt';
			fetch(urlReceipt, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				}
			})
				.then((data) => {
					if (data.status === 401) {
						localStorage.clear()
					} else if (data.status === 200) {
						return data.json();
					}
					throw data
				})
				.then((res) => {
					dispatch({
						type: ActionTypes.GETRECEIPT,
						payload: res.data.receipt
					});
				})
				.catch((error) => {
					console.log({ error });
				});
		};
	},
	getUser: () => {
		return (dispatch, getState) => {
			const token = getState().authReducer.token
			const urlReceipt = process.env.REACT_APP_ENDPOINT + 'api/users';
			fetch(urlReceipt, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				}
			})
				.then((data) => {
					if (data.status === 401) {
						localStorage.clear()
					} else if (data.status === 200) {
						return data.json();
					}
					throw data
				})
				.then((res) => {
					dispatch({ type: ActionTypes.GETUSER, payload: res.data.user });
				})
				.catch((error) => {
					console.log({ error });
				});
		};
	}
};
export default DashboardAction;
