const INITIAL_STATE = {
	user: [{}],
	receipt: [{}]
};

function dashboardReducer(state = INITIAL_STATE, action) {
	console.log(action);
	switch (action.type) {
		case 'GETUSER': {
			return {
				...state,
				user: action.payload
			};
		}
		case 'GETRECEIPT': {
			return {
				...state,
				receipt: action.payload
			};
		}
		default:
			return state;
	}
}

export { dashboardReducer };
