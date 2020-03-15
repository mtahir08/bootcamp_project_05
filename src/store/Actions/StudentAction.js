import ActionTypes from './ActionsTypes';

const StudentAction = {
    setStudent: (id, token) => {
        return (dispatch) => {
            const url = `${process.env.REACT_APP_STUDENTDASHBOARDAPI}${id}`;
            fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    dispatch({ type: ActionTypes.SETSTUDENT, payload: data.data.receipt });
                })
                .catch(error => alert(error))

        };
    },
}

export { StudentAction };