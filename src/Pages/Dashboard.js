import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap'
import '../index.css';
import UserTable from '../components/Dashboard/UserTable';
import UserTableDetail from '../components/Dashboard/UserTableDetail';

class Dash extends Component {
	state = {
		data: [],
		isLoading: false
	}
	componentDidMount() {
		const tokenObj = localStorage.getItem('token');
		console.log(tokenObj);
		this.setState({ isLoading: true })
		let url = process.env.REACT_APP_DASHBOARDAPI
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": 'Bearer ' + tokenObj //"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTY0YzRhOGY3MmNhYzAwMDRkODZiMjgiLCJleHAiOjE1ODM2NzAyMzQsImlhdCI6MTU4MzY2NjYzNH0.LudbvSRTcMoYiUlq65K4f0o6RRKEhhhZeUYVpFbREq4"
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
