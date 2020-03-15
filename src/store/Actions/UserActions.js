import ActionTypes from './ActionsTypes';

const UsersAction = {
    setAdminData: (obj) => {
        console.log(obj)
        return (dispatch) => {
            const url = process.env.REACT_APP_DASHBOARDAPI;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${obj.token}`
                }
            })
                .then((resposne) => resposne.json())
                .then((data) => {
                    console.log("Inside Store", data)
                    dispatch({ type: ActionTypes.SETADMINDATA, payload: data.data });
                })
        }
    },
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
    edit: (obj) => {
        return (dispatch) => {
            let url = process.env.REACT_APP_DASHBOARDAPI;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    name: obj.name,
                    email: `${obj.email}`,
                    password: `${obj.password}`
                })
            })
                .then((resposne) => resposne.json())
                .then((data) => {
                    console.log(data);
                });
        };
    }

};

export { UsersAction };
