import ReceiptDetailTypes from  "./ReceiptDetailTypes"
const receiptDetailAction = {
setData: (obj) => {
    console.log(obj);
    return (dispatch) => {
        fetch(`https://uitedemo.herokuapp.com/api/receipt/${obj}`,
       { 
           method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTZjZDkxMTI4YmI4ZTAwMDRmMWQxMGYiLCJyb2xlIjoiQSIsImV4cCI6MTU4NDE5OTAyMCwiaWF0IjoxNTg0MTk1NDIwfQ.Gk6QPDkzNSRlj-tOxJ2F7YF-nqcVLhZjnf3oze7aAzU"
        }
        })
            .then((resposne) => resposne.json())
            .then((data) => {  
                    dispatch({ type: ReceiptDetailTypes.SET_DATA, payload: data });
            })
            .catch((error) => {
                console.log({ error });
                alert('please log in again');
            })
    }
}
}
export default receiptDetailAction 