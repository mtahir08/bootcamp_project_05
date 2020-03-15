import ActionTypes from './ActionsTypes';

const UserActions = {
    Add: (obj) => {
        return (dispatch, getState) => {
            dispatch({ type: ActionTypes.ADD })
            const url = process.env.REACT_APP_ENDPOINT + 'api/users';
            const token = getState().authReducers.token

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'origin': '',
                },
                body: JSON.stringify(obj)
            })
                .then(async (response) => {
                    if (response.status === 401) {
                        localStorage.clear()
                    } else if (response.status === 200)
                        return response.json()
                    throw response
                })
                .then((data) => {
                    dispatch({ type: ActionTypes.ADD_USER_SUCCESS, payload: data })
                })
                .catch((error) => {
                    console.log({ error })
                })
        }

    },

}

export default UserActions 