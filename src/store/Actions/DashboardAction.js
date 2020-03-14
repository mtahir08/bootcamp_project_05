import ActionTypes from './ActionsTypes';

const DashboardAction = {
	getRecipt: () => {
		return (dispatch) => {
			const tokenObj = localStorage.getItem('token');
			const urlReceipt = 'https://uitedemo.herokuapp.com/api/receipt';
			fetch(urlReceipt, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${tokenObj}`
				}
			})
				.then((data) => {
					data.json().then((res) => {
						console.log('receipt', res.data.receipt);
						dispatch({
							type: ActionTypes.GETRECEIPT,
							payload: res.data.receipt
						});
					});
				})
				.catch((error) => {
					console.log({ error });
				});
		};
	},
	getUser: () => {
		return (dispatch) => {
			const tokenObj = localStorage.getItem('token');
			const urlReceipt = 'https://uitedemo.herokuapp.com/api/users';
			fetch(urlReceipt, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${tokenObj}`
				}
			})
				.then((data) => {
					data.json().then((res) => {
						console.log('receipt', res.data.user);
						dispatch({ type: ActionTypes.GETUSER, payload: res.data.user });
					});
				})
				.catch((error) => {
					console.log({ error });
				});
		};
	}
};
export default DashboardAction;
