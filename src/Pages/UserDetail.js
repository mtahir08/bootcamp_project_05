import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom';
// import {connect } from 'react-redux';

// const mapStateToProps=(state)=>{
//     console.log(state)
//     // return{
//     //     userDetail:state.Add.
//     // }
// }

function UserDetail(props) {
    const { userId } = useParams()

    const [userDetail, setUserDetail] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [row , setRow] = useState([])
    useEffect(() => {
        setIsLoading(true)
        // fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        //     .then(response => response.json())
        //     .then(response => {
        //         setUserDetail([response])
        //         setIsLoading(false)
        //     })
        const data = props.history.location.state.user
        setUserDetail(props.history.location.state.user)
        console.log(props.history.location.state.user)

    }, [])
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Updated at</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                    
                </thead>
                <tbody>
                <tr key={userDetail._id}>
                    <td>{userDetail._id}</td>
                    <td>{userDetail.gender}</td>
                    <td>{userDetail.email}</td>
                    <td>{userDetail.updatedAt}</td>
                    <td>{userDetail.createdAt}</td>
                    <td><Link to="/dashboard">Go Back</Link></td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default UserDetail;