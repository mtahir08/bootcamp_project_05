import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import { getCloudinaryUrl } from '../utils/cloudinary';


class AddReceipt extends Component {
    state = {
        dateNow: '',
        currentDate: "",
        Month: "",
        Year: "",
        imageFile: '',
        imageUrl: '',
        message: '',
        amount: '',
    }

    onChangeFile = (event) => {
        const file = event.target.files[0];
        this.setState({
            imageFile: file,
        })
    }

    onChange = (event) => {
        this.setState({ amount: event.target.value })
    }

    handleChange = (date) => {
        this.setState({
            dateNow: date,
            currentDate: date && date.getDate(),
            Month: date && date.getMonth(),
            Year: date && date.getFullYear()
        });
    }

    submitButton = async () => {
        const { imageFile, dateNow, amount, Month, Year, } = this.state;
        const token = localStorage.getItem("token");

        if (!imageFile) {
            return alert("Please select any file")
        }

        if (!dateNow) {
            return alert("Please select any date")
        }

        if (!amount) {
            return alert("Please enter any amount")
        }

        if (imageFile && dateNow && amount) {
            const data = new FormData()
            data.append('file', imageFile);
            data.append('upload_preset', "gq1yajbf")
            data.append('cloud_name', 'dutexiflb');

            const url = await getCloudinaryUrl(imageFile);
            const obj = {
                "month": `${Month + 1}`,
                "year": `${Year}`,
                "picture": `${url}`,
                "amount": `${amount}`,
            }

            fetch("https://uitedemo.herokuapp.com/api/receipt", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(obj)
            })
                .then(response => response.json())
                .then(result => {
                    if (result.message === "Authorization failed!") {
                        alert("Authorization failed!")
                    }
                    else if (result.message === "Successfully Created") {

                        alert("Successfully Added!")
                        this.props.history.push("/receipt")
                    }
                    else {
                        alert(result.message)
                    }
                })
                .catch(error => console.log('error', error))
        }
    }

    gotoBack = () => {
        this.props.history.push('/receipt')
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <h1>Add Receipt</h1>
                <div className="container" style={{ marginTop: '10%', }}>
                    <div style={{ width: "30%", marginBottom: 10 }}>
                        <h4>Select Date</h4>
                        <DatePicker
                            selected={this.state.currentDate}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div style={{ width: "30%", marginBottom: 10 }}>
                        <h4>Enter Amount</h4>
                        <input type='number' onChange={this.onChange} width='20px' height='20px' />
                    </div>

                    <div style={{ width: "30%", marginBottom: 10 }}>
                        <input type='file' onChange={this.onChangeFile} width='20px' height='20px' />
                    </div>

                    <div style={{ marginBottom: 10, display: 'flex', }}>
                        <Button onClick={this.submitButton} style={{ marginRight: '4%', width: 100, height: 40 }}>Upload</Button>
                        <Button onClick={this.gotoBack} style={{ width: 100, height: 40 }}>Go Back</Button>
                    </div>

                </div >
            </div>
        )
    }
}

export default AddReceipt