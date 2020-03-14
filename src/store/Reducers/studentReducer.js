const INITIAL_STATE = {
	user: [],
};

function studentReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SETSTUDENT': {
			return {
				...state,
				user: action.payload,
			};
		}
		default:
			return state;
	}
}

export { studentReducer };
