import React, { Component, useEffect, useState } from 'react';

import { connect } from 'react-redux';
import '../index.css';
import { Table } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom';
import UserTable from '../components/Dashboard/UserTable';
import UserTableDetail from '../components/Dashboard/UserTableDetail';

class Dash extends Component {
    state = {
        data: [],
        isLoading: false
    }
    componentDidMount() {
        // const tokenObj = parse.json( localStorage.getItem(''));
        this.setState({ isLoading: true })
        let url  = process.env.REACT_APP_DASHBOARDAPI
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTY0YzRhOGY3MmNhYzAwMDRkODZiMjgiLCJleHAiOjE1ODM2NzAyMzQsImlhdCI6MTU4MzY2NjYzNH0.LudbvSRTcMoYiUlq65K4f0o6RRKEhhhZeUYVpFbREq4"
            }
        })
            .then((data) => {
                data.json()
                .then(res2 => {
                    console.log('res2', res2)
                    this.setState({ data: res2.data.user })

                })

            })
            .catch((error) => {
                console.log({ error })
            })


        // const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // const data = await response.json()
        // this.setState({ data, isLoading: false })
        // this.props.Add(this.state.data);
    }

    render() {
        console.log('data', this.state.data)
        return (
            <div>
                <div className="container">
                    <Table striped bordered hover>
                        <UserTable />
                        <UserTableDetail userData={this.state.data} />
                    </Table>
                </div>


            </div>
        );
    };
}


export default connect(null, mapDispatchToProps)(Dash);


function mapDispatchToProps(dispatch) {
    return {
        Add: (data) => dispatch({ type: 'ADD', payload: data }),
    };
}

function UserDetail() {
    const { userId } = useParams()

    const [userDetail, setUserDetail] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        let url  = process.env.REACT_APP_DASHBOARDAPI
        // fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        fetch(url + userId )
            .then(response => response.json())
            .then(response => {
                setUserDetail([response])
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="container">
            <Table striped bordered hover>

                <UserTable />

                {isLoading ? (<h1>Loading...</h1>)
                    : (<UserTableDetail userData={userDetail} />)}


            </Table>
        </div>
    )
}
export { UserDetail }
