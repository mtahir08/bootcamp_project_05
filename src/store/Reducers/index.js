
import ActionTypes from '../Actions/ActionsTypes';
const INITIAL_STATE = {
    users: [],
}

function UserReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ActionTypes.ADD_USER_SUCCESS: {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }

        default: return state;
    }
}

export { UserReducer };