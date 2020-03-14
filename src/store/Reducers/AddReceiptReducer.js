import ActionTypes from '../Actions/ActionsTypes';

const initialState = {
    lodding: false,
    status: false,
    error: false,
}

const AddReceiptReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RECEIPT: {
            return {
                ...state,
                lodding: true
            }
        }
        case ActionTypes.ADD_RECEIPT_SUCCESS: {
            return {
                ...state,
                lodding: false,
                status: true,
            }
        }
        case ActionTypes.ADD_RECEIPT_FAIL: {
            return {
                ...state,
                lodding: false,
                error: true,
            }
        }
    }
    return { ...state }
}

export { AddReceiptReducer }