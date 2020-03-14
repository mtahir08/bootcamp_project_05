import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom';
// import '../index.css';
import UserTable from '../components/Dashboard/UserTable';
import UserTableDetail from '../components/Dashboard/UserTableDetail';

const Dash = (props) => {
	const [data, setData] = useState([]);
	useEffect(() => {

		didMount();
	}, [props.users]);
	const didMount = () => {
		const tokenObj = localStorage.getItem('token');

		let url = process.env.REACT_APP_DASHBOARDAPI;

		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${tokenObj}`
			}
		})
			.then((data) => {
				if (data.status === 200) {
					return data.json()
				}
				throw data;
			})
			.then(res2 => {
				console.log({ res2 });
				setData({ data: res2.data.user })
			})
			.catch((error) => {
				console.log(error)
			});
	};
	return (
		<div>

			<div className="container">
				<Table striped bordered hover>
					<UserTable />
					<UserTableDetail userData={data} />
				</Table>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		users: state.authReducer.users
	}
}

function mapDispatchToProps(dispatch) {
	return {
		Add: (data) => dispatch({ type: 'ADD', payload: data }),
		SETADMINDATA: (obj) => dispatch({ type: 'SETADMINDATA', payload: obj })
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
		setIsLoading(true);
		let url = process.env.REACT_APP_DASHBOARDAPI;

		fetch(url + userId)
			.then((response) => response.json())
			.then((response) => {
				setUserDetail([response]);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="container">
			<Table striped bordered hover>
				<UserTable />

				{isLoading ? (
					<h1>Loading...</h1>
				) : (
						<UserTableDetail userData={userDetail} />
					)}
			</Table>
		</div>

	);
}
export { UserDetail }