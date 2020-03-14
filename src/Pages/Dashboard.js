import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom';
import '../index.css';
import UserTable from '../components/Dashboard/UserTable';
import UserTableDetail from '../components/Dashboard/UserTableDetail';
import Side from '../Sidenav';

class Dash extends Component {
	state = {
		data: [],
		isLoading: false
	}
	componentDidMount() {
		const tokenObj = localStorage.getItem('token');
		this.setState({ isLoading: true });
		this.props.SETADMINDATA({token:tokenObj});
	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps.users)
	}

	render() {
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

function mapStateToProps(state){
	return{
		users: state.authReducer.users
	}
}

function mapDispatchToProps(dispatch) {
	return {
		Add: (data) => dispatch({ type: 'ADD', payload: data }),
		SETADMINDATA:(obj)=> dispatch({ type: 'SETADMINDATA', payload: obj})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dash);

function UserDetail() {
	console.log('params', useParams());
	const { userId } = useParams()

	const history = useHistory()
	const [userDetail, setUserDetail] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		let url = process.env.REACT_APP_DASHBOARDAPI
		const tokenObj = localStorage.getItem('token');
		fetch(url + userId, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": 'Bearer ' + tokenObj //"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTY0YzRhOGY3MmNhYzAwMDRkODZiMjgiLCJleHAiOjE1ODM2NzAyMzQsImlhdCI6MTU4MzY2NjYzNH0.LudbvSRTcMoYiUlq65K4f0o6RRKEhhhZeUYVpFbREq4"
			}
		})
			.then(response => {
				if (!response.ok)
					throw response
				return response.json()
			})
			.then(response => {
				console.log(response)
				setUserDetail([response.data.user])
				setIsLoading(false)
			})
			.catch((error) => {
				if (error.status === 401) {
					history.push('/')
				}
				console.log({ error });
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