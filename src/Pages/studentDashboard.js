import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../styles/studentDashboard.css';
import Headbar from './Headerbar';

class StudentDashboard extends Component {
    state = {
        rowData: []
    }
    componentDidMount = () => {
        // console.log(this.props.user.user._id)
        const id = this.props.user.user._id
        const token = this.props.user.token
        console.log(token);
        // console.log(id)
        fetch(`https://uitedemo.herokuapp.com/api/receipt/user/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response)
                return response.json();

            })
            .then(data => {
                // console.log(data)
                const array = data.data.receipt
                console.log(array)

                const rowRender = array.map(user => {
                    return (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.month}</td>
                            <td>{user.year}</td>
                            <td>{user.createdAt.split('-')[0]}</td>
                            <td>{user.status}</td>
                        </tr>
                    )
                })
                this.setState({ rowData: rowRender })
                // console.log(rowRender)
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                 <Headbar />
            <div className="container studentTable">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Month</td>
                            <td>Year</td>
                            <td>Sent At</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    {this.state.rowData ? (
                        this.state.rowData
                    ) : (
                            <h1>Loading...</h1>
                        )}
                </Table>
                <div className="floatingButton">
                    <Fab color="primary" onClick={()=>this.props.history.push('/addReceipt')}  aria-label="add">
                        <AddIcon />
                    </Fab>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user
    };
}

export default connect(mapStateToProps)(StudentDashboard);
