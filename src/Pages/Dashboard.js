// Token and user data is comming from store of react-redux which is created from login information.
// And now token can get from mapsStateToProps fucntion or in dash function
// But I am still getting token from local storage beacuse of function running cycle or async behaviour

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import '../index.css';
import { Table } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import UserTable from '../components/Dashboard/UserTable';
import UserTableDetail from '../components/Dashboard/UserTableDetail';

import Side from '../Sidenav';

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
				data.json()
					.then(res2 => {
					
						setData({ data: res2.data.user })

					})
			})
			.catch((error) => {
				
			});
	};

	return (
		
			
				<Table className="table" >
					<UserTable />
					<UserTableDetail userData={data.data} />
				</Table>
			
		
	);
};

function mapStateToProps(state) {
	
	return {
		user: state.users,
		token: state.token
	};
}

function mapDispatchToProps(dispatch) {
	return {
		Add: (data) => dispatch({ type: 'ADD', payload: data })
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dash);

function UserDetail() {
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

	return (<Table className="table">
				<UserTable />

				{isLoading ? (
					<h1>Loading...</h1>
				) : (
						<UserTableDetail userData={userDetail} />
					)}
			</Table>
		
	);
}
export { UserDetail };
