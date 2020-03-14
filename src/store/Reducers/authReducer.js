const INITIAL_STATE = {
	user: {},
	token: ''
};

function authReducer(state = INITIAL_STATE, action) {
	console.log(action);
	switch (action.type) {
		case 'SETDATA': {
			return {
				...state,
				user: action.payload,
				token: action.payload.token
			};
		}
		case 'GETADMINDATA': {
			return{
				...state,
				users:action.payload
			}
		}
		case 'EDIT':{
			return{
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
