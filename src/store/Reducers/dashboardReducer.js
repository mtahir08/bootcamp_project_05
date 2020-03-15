import ActionTypes from '../Actions/ActionsTypes';
const INITIAL_STATE = {
	user: [],
	receipt: []
};

function dashboardReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ActionTypes.GETUSER: {
			return {
				...state,
				user: action.payload
			};
		}
		case ActionTypes.GETRECEIPT: {
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
