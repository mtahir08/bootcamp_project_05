const INITIAL_STATE = {
	user: {},
	token: ''
};

function authReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'LOGIN': {
			return {
				...state,
				user: action.payload,
				token: action.payload.token
			};
		}
		case 'GETADMINDATA': {
			return {
				...state,
				users: action.payload
			}
		}
		case 'EDIT': {
			return {
				...state,
				user: action.payload,
				token: action.payload.token
			}
		}
		default:
			return state;
	}
}

export { authReducer };
