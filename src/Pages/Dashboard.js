import React, { Component, } from 'react';

import { connect } from 'react-redux';
import '../index.css';
import { Table } from 'react-bootstrap'
import {  Link } from 'react-router-dom';
// const MyContext = React.useContext()

function mapDispatchToProps(dispatch) {
	return {
		Add: (data) => dispatch({ type: 'ADD', payload: data }),
		
	};
}




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
