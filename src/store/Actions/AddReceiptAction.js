import ActionTypes from './ActionsTypes';


const addReceipt = (obj) => {
    const token = localStorage.getItem("token");
    return async (dispach) => {
        dispach({
            type: ActionTypes.ADD_RECEIPT
        })


        try {
            const response = await fetch("https://uitedemo.herokuapp.com/api/receipt", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(obj)
            })

            const data = await response.json();
            dispach({
                type: ActionTypes.ADD_RECEIPT_SUCCESS
            })
        } catch (err) {
            console.log(err)
            dispach({ type: ActionTypes.ADD_RECEIPT_FAIL })
        }
    }
}

export { addReceipt }