import React, { Component, } from 'react';

import { connect } from 'react-redux';
import '../index.css';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// const MyContext = React.useContext()

function mapDispatchToProps(dispatch) {
	return {
		Add: (data) => dispatch({ type: 'ADD', payload: data }),

	};
}




class Dash extends Component {
	state = {
		data: [],
	}
	async componentDidMount() {
		// const url = "https://uitedemo.herokuapp.com/api/receipt";
		// const response = await fetch(url,{
		// 	method:'GET', 	
		// 	headers:{
		// 		'Content-Type':'application/json',
		// 		"Authorization":'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTY0YTEwZmEyZDkwYTAwMDRhYmUxNWMiLCJleHAiOjE1ODM2NjgxNjgsImlhdCI6MTU4MzY2NDU2OH0.cVhNK99-f3vR63iHj_u2Qkeya8Q5VZAL8BeGWVRp0go'
		// 	},
		// });

		fetch('https://uitedemo.herokuapp.com/api/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTY0YTEwZmEyZDkwYTAwMDRhYmUxNWMiLCJleHAiOjE1ODM2NzY5NzQsImlhdCI6MTU4MzY3MzM3NH0.ANlAFMpIAczZVYgm_a3rgagMGFol42TurUy2mTnbJAE"
			}
		})
			.then((data) => data.json())
			.then(res2 => {
				console.log('res2', res2.data.user)
				this.setState({ data: res2.data.user })
				this.props.Add(this.state.data);
			})
			.catch((error) => {
				console.log({ error })
			})

	}

	render() {
		const userData = this.state.data.map((user, i) => {
			return (
				<tr key={user._id}>
					<td>{i}</td>
					<td>{user._id}</td>
					<td>{user.gender}</td>
					<td>{user.email}</td>
					<td>{user.updatedAt}</td>
					<td>{user.createdAt}</td>
					<Link
						to={{
							pathname: `/dashboard/${user._id}`,
							state: {
								user: { _id: user._id, gender: user.gender, email: user.email, updatedAt: user.updatedAt, createdAt: user.createdAt }
							}
						}}
					>View</Link>
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
								<th>ID</th>
								<th>Gender</th>
								<th>Email</th>
								<th>Updated at</th>
								<th>Created At</th>
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
