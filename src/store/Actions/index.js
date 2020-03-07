import { ActionTypes } from './ActionsTypes'
const base_url = 'http://localhost:5000'
const TodoActions = {
    Add: (obj) => {
        console.log(obj)
        return (dispatch) => {
            dispatch({ type: ActionTypes.CREATE_TODO })
            const url = `${base_url}/users`
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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
                    dispatch({ type: ActionTypes.CREATE_TODO_SUCCESS, payload: data })
                    console.log( 'data' , data)
                })
                .catch((error) => {
                    console.log({ error })
                    dispatch({ type: ActionTypes.CREATE_TODO_FAILED })
                })
        }

    },
    
}

export default TodoActions 