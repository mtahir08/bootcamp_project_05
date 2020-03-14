// Token and user data is comming from store of react-redux which is created from login information.
// And now token can get from mapsStateToProps fucntion or in dash function
// But I am still getting token from local storage beacuse of function running cycle or async behaviour

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import { Table } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import UserTable from '../components/Dashboard/UserTable';
import UserTableDetail from '../components/Dashboard/UserTableDetail';
import Side from '../Sidenav';
import { Bar } from 'react-chartjs-2';

const Dash = (props) => {
	const [data, setData] = useState([]);
	const [receipts, setReceipts] = useState([]);
	let jan = 0,
		feb = 0,
		march = 0,
		april = 0,
		may = 0,
		june = 0,
		july = 0,
		aug = 0,
		sep = 0,
		oct = 0,
		nov = 0,
		dec = 0;
	let janUser = 0,
		febUser = 0,
		marchUser = 0,
		aprilUser = 0,
		mayUser = 0,
		juneUser = 0,
		julyUser = 0,
		augUser = 0,
		sepUser = 0,
		octUser = 0,
		novUser = 0,
		decUser = 0;
	const [barDataReceipts, setBarDataReceipts] = useState({
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		],
		datasets: [{}]
	});

	const [barDataUser, setBarDataUser] = useState({
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		],
		datasets: [{}]
	});

	useEffect(() => {
		console.log(props.user, props.token);
		didMount();
	}, [props.users]);

	const didMount = () => {
		const tokenObj = localStorage.getItem('token');
		console.log(tokenObj);

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

		const urlReceipt = 'https://uitedemo.herokuapp.com/api/receipt';

		fetch(urlReceipt, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenObj}`
			}
		})
			.then((data) => {
				data.json().then((res) => {
					console.log('receipt', res.data.receipt);
					res.data.receipt.map((receipt) => {
						if (receipt.month == 'January') {
							jan++;
						} else if (
							receipt.month === 'Feb' ||
							receipt.month === 'Febebruary'
						) {
							feb++;
						} else if (receipt.month === 'march' || receipt.month === 'March') {
							march++;
						} else if (receipt.month === 'April' || receipt.month === 'april') {
							april++;
						} else if (receipt.month === 'May' || receipt.month === 'may') {
							may++;
						} else if (receipt.month === 'june' || receipt.month === 'June') {
							june++;
						} else if (receipt.month === 'July' || receipt.month === 'july') {
							july++;
						} else if (receipt.month === 'August') {
							aug++;
						} else if (
							receipt.month === 'Sep' ||
							receipt.month === 'September'
						) {
							sep++;
						} else if (receipt.month === 'oct' || receipt.month === 'October') {
							oct++;
						} else if (
							receipt.month === 'nov' ||
							receipt.month === 'November'
						) {
							nov++;
						} else if (
							receipt.month === 'dec' ||
							receipt.month === 'Decemeber'
						) {
							dec++;
						}
					});
					setBarDataReceipts({
						datasets: [
							{
								label: 'Recipt',
								backgroundColor: 'rgba(0,255,0,0.3)',
								borderColor: 'rgba(0,0,0,1)',
								borderWidth: 2,
								data: [
									jan,
									feb,
									march,
									april,
									may,
									june,
									july,
									aug,
									sep,
									oct,
									nov,
									dec
								]
							}
						]
					});
				});
			})
			.catch((error) => {
				console.log({ error });
			});

		const urlUser = 'https://uitedemo.herokuapp.com/api/users';

		fetch(urlUser, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenObj}`
			}
		})
			.then((data) => {
				data.json().then((res) => {
					console.log('user', res.data.user);
					res.data.user.map((user) => {
						const month = user.createdAt.substr(5, 2);
						console.log(month);
						if (month == '01') {
							janUser++;
						} else if (month === '02') {
							febUser++;
						} else if (month === '03') {
							marchUser++;
						} else if (month === '04') {
							aprilUser++;
						} else if (month === '05') {
							mayUser++;
						} else if (month === '06') {
							juneUser++;
						} else if (month === '07') {
							julyUser++;
						} else if (month === '08') {
							augUser++;
						} else if (month === '09') {
							sepUser++;
						} else if (month === '10') {
							octUser++;
						} else if (month === '11') {
							novUser++;
						} else if (month === '12') {
							decUser++;
						}
					});
					setBarDataUser({
						datasets: [
							{
								label: 'User',
								backgroundColor: 'rgba(75,192,192,1)',
								borderColor: 'rgba(0,0,0,1)',
								borderWidth: 2,
								data: [
									janUser,
									febUser,
									marchUser,
									aprilUser,
									mayUser,
									juneUser,
									julyUser,
									augUser,
									sepUser,
									octUser,
									novUser,
									decUser
								]
							}
						]
					});
				});
			})
			.catch((error) => {
				console.log({ error });
			});
	};

	const graph = () => {
		return (
			<div>
				<Bar
					data={barDataReceipts}
					options={{
						title: {
							display: true,
							text: 'RECEIPT GRAPH',
							fontSize: 20
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/>
				<Bar
					data={barDataUser}
					options={{
						title: {
							display: true,
							text: 'USER GRAPH',
							fontSize: 20
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/>
			</div>
		);
	};

	return (
		<div>
			<div className="container">
				<div>{graph()}</div>
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

function mapDispatchToProps(dispatch) {
	return {
		Add: (data) => dispatch({ type: 'ADD', payload: data })
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dash);

function UserDetail() {
	const { userId } = useParams();

	const history = useHistory();
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
