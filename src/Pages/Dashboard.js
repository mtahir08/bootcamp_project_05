import React, { Component, useEffect, useState  } from 'react';

import { connect } from 'react-redux';
import '../index.css';
import { Table } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom';
function mapDispatchToProps(dispatch) {
	return {
		Add: (data) => dispatch({ type: 'ADD', payload: data }),
		
	};
}




function UserDetail() {
    const { userId } = useParams()
    
    const [userDetail, setUserDetail] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(response => {
                setUserDetail([response])
                setIsLoading(false)
            })
    }, [])
    const userData = !isLoading ?  userDetail.map(user => {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company.bs}</td>
                <td>2003</td>
                <td>{user.address.street}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
                <td><Link to="/dashboard">Go Back</Link></td>
            </tr>
        )
    }) : <h2>Loading...</h2>
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Association Office Name</th>
                        <th>Year</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData}
                </tbody>
            </Table>
        </div>
    )
}
export { UserDetail } 

class Dash extends Component{
	state = {
		data : [],
	}
	async componentDidMount() {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.json()
		console.log(data)
		this.setState({data})
			this.props.Add(this.state.data);
	}
	
	render(){
		const userData = this.state.data.map(user => {
		return (
			<tr key={user.id}>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>{user.phone}</td>
				<td>{user.company.bs}</td>
				<td>2003</td>
				<Link to={`/dashboard/${user.id}`}>View</Link>
			</tr>
		)

	})
		return (
		<div>
			<div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Association Office Name</th>
                            <th>Year</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData}
                    </tbody>
                </Table>
            </div>
			
	
		</div>
	);
};
	}
	

export default connect(null, mapDispatchToProps)(Dash);
