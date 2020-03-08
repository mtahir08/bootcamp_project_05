// Token and user data is comming from store of react-redux which is created from login information.
// And now token can get from mapsStateToProps fucntion or in dash function
// But I am still getting token from local storage beacuse of function running cycle or async behaviour

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import { Table } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import UserTable from '../components/Dashboard/UserTable';
import UserTableDetail from '../components/Dashboard/UserTableDetail';

const Dash = (props) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		console.log(props.user, props.token);
		didMount();
	}, [props.users]);

	const didMount = () => {
		const tokenObj = localStorage.getItem('token');
		console.log(tokenObj);
		setIsLoading(true);

		let url = process.env.REACT_APP_DASHBOARDAPI;

		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenObj}`
			}
		})
			.then((data) => {
				data.json().then((res2) => {
					console.log('res2', res2);
					setData(res2.data.user);
				});
			})
			.catch((error) => {
				console.log({ error });
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
};

function mapStateToProps(state) {
	console.log(state);
	return {
		user: state.users,
		token: state.token
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dash);

function mapDispatchToProps(dispatch) {
	return {
		Add: (data) => dispatch({ type: 'ADD', payload: data })
	};
}

function UserDetail() {
	const { userId } = useParams();

	const [userDetail, setUserDetail] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		let url = process.env.REACT_APP_DASHBOARDAPI;
		console.log(url + userId);
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
export { UserDetail };
