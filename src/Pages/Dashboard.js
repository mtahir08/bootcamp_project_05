import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import { Table } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import UserTable from '../components/Dashboard/UserTable';
import UserTableDetail from '../components/Dashboard/UserTableDetail';
import DashboardAction from '../store/Actions/DashboardAction';
import Side from '../Sidenav';
import { Bar } from 'react-chartjs-2';

const Dash = (props) => {
	const [data, setData] = useState([]);

	let receiptMonths = {
		jan: 0,
		feb: 0,
		march: 0,
		april: 0,
		may: 0,
		june: 0,
		july: 0,
		aug: 0,
		sep: 0,
		oct: 0,
		nov: 0,
		dec: 0
	};
	let userMonths = {
		jan: 0,
		feb: 0,
		march: 0,
		april: 0,
		may: 0,
		june: 0,
		july: 0,
		aug: 0,
		sep: 0,
		oct: 0,
		nov: 0,
		dec: 0
	};
	const label = [
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
	];
	const [barDataReceipts, setBarDataReceipts] = useState({
		labels: label,
		datasets: []
	});

	const [barDataUser, setBarDataUser] = useState({
		labels: label,
		datasets: []
	});

	useEffect(() => {
		console.log(props.user, props.token);
		didMount();
	}, []);

	useEffect(() => {
		willRrecipeProps();
	}, [props.receipts]);

	const willRrecipeProps = () => {
		if (props.users[1]) {
			props.users.map((user) => {
				console.log(user.createdAt);
				const month = user.createdAt.substr(5, 2);
				console.log(month);
				if (month == '01') {
					userMonths.jan++;
				} else if (month === '02') {
					userMonths.feb++;
				} else if (month === '03') {
					userMonths.march++;
				} else if (month === '04') {
					userMonths.april++;
				} else if (month === '05') {
					userMonths.may++;
				} else if (month === '06') {
					userMonths.june++;
				} else if (month === '07') {
					userMonths.july++;
				} else if (month === '08') {
					userMonths.aug++;
				} else if (month === '09') {
					userMonths.sep++;
				} else if (month === '10') {
					userMonths.oct++;
				} else if (month === '11') {
					userMonths.nov++;
				} else if (month === '12') {
					userMonths.dec++;
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
							userMonths.jan,
							userMonths.feb,
							userMonths.march,
							userMonths.april,
							userMonths.may,
							userMonths.june,
							userMonths.july,
							userMonths.aug,
							userMonths.sep,
							userMonths.oct,
							userMonths.nov,
							userMonths.dec
						]
					}
				]
			});
			console.log(props.users);
		}

		if (props.receipts[1]) {
			props.receipts.map((receipt, index) => {
				console.log(receipt.month);
				if (receipt.month == 'January') {
					receiptMonths.jan++;
				} else if (receipt.month === 'Feb') {
					receiptMonths.feb++;
				} else if (receipt.month === 'march') {
					receiptMonths.march++;
				} else if (receipt.month === 'April') {
					receiptMonths.april++;
				} else if (receipt.month === 'May') {
					receiptMonths.may++;
				} else if (receipt.month === 'june') {
					receiptMonths.june++;
				} else if (receipt.month === 'July') {
					receiptMonths.july++;
				} else if (receipt.month === 'August') {
					receiptMonths.aug++;
				} else if (receipt.month === 'Sep') {
					receiptMonths.sep++;
				} else if (receipt.month === 'oct') {
					receiptMonths.oct++;
				} else if (receipt.month === 'nov') {
					receiptMonths.nov++;
				} else if (receipt.month === 'dec') {
					receiptMonths.dec++;
				}
			});
			setBarDataReceipts({
				datasets: [
					{
						label: 'Recipt',
						backgroundColor: 'rgba(75,192,192,1)',
						borderColor: 'rgba(0,0,0,1)',
						borderWidth: 2,
						data: [
							receiptMonths.jan,
							receiptMonths.feb,
							receiptMonths.march,
							receiptMonths.april,
							receiptMonths.may,
							receiptMonths.june,
							receiptMonths.july,
							receiptMonths.aug,
							receiptMonths.sep,
							receiptMonths.oct,
							receiptMonths.nov,
							receiptMonths.dec
						]
					}
				]
			});
			console.log(props.receipts);
		}
	};
	const didMount = () => {
		props.GETRECEIPT({});
		props.GETUSER({});
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
	console.log(state.dashboardReducer.user);
	return {
		user: state.users,
		token: state.token,
		users: state.dashboardReducer.user,
		receipts: state.dashboardReducer.receipt
	};
}

function mapDispatchToProps(dispatch) {
	return {
		Add: (data) => dispatch({ type: 'ADD', payload: data }),
		// GET: (data) => dispatch({ type: 'GET', payload: data }),
		GETRECEIPT: (obj) => {
			console.log(obj);
			dispatch(DashboardAction.getRecipt(obj));
		},
		GETUSER: (obj) => {
			console.log(obj);
			dispatch(DashboardAction.getUser(obj));
		}
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
