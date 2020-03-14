import ActionTypes from './ActionsTypes';
const base_url = ' https://uitedemo.herokuapp.com/api/users'

const TodoActions = {
    Add: (obj) => {
        console.log(obj)
        return (dispatch) => {
            dispatch({ type: ActionTypes.ADD })
            const url = `${base_url}`
            // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTY0YTI2ZmEyZDkwYTAwMDRhYmUxNjQiLCJleHAiOjE1ODM2NjczNjgsImlhdCI6MTU4MzY2Mzc2OH0.AES4sswlycZPu-Nca29mzj1Cl9X3kDXDP0H6c4u7JQ4"
            const token = localStorage.getItem('token');

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
                    const res = await response.json()
                    if (response.status === 200)
                        return res
                    throw res
                })
                .then((data) => {
                    dispatch({ type: ActionTypes.ADD, payload: data })
                    console.log('data', data)
                })
                .catch((error) => {
                    console.log({ error })
                    // dispatch({ type: ActionTypes.CREATE_TODO_FAILED })
                })
        }

    },

}

export default TodoActions 