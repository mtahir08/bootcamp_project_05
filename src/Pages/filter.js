import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import table from 'react-bootstrap';
import TodoActions from '../store/Actions/index';
import { Link } from 'react-router-dom';
import '../styles/filter.css';

function mapStateToProps(state) {
	return {
		todos: state.todos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		// delete: (id) => {
		//     return dispatch(TodoActions.Delete(id))
		// },
		delete: (id) => {
			return dispatch({ type: 'DELETE', payload: id });
		},
		// edit: (obj) => dispatch(TodoActions.Edit(obj))
		edit: (obj) => dispatch({ type: 'EDIT', payload: obj })
	};
}

const List = (props) => {
	const dummyData = [{ name: "x", phoneNumber: '3', association: 'realme', status: 'approved', month: 'july', year: '2020', email: '1@gmail.com' },
	{ name: "y", phoneNumber: '65', association: 'samsung', status: 'approved', month: 'jan', year: '2020', email: '2@gmail.com' },
	{ name: "z", phoneNumber: '53', association: 'huawie', status: 'notGenerated', month: 'aug', year: '2018', email: '3@gmail.com' },
	{ name: "t", phoneNumber: '87', association: 'iphone', status: 'decline', month: 'Feb', year: '2017', email: '4@gmail.com' },
	{ name: "m", phoneNumber: '98', association: 'oppo', status: 'pending', month: 'Sept', year: '2016', email: '5@gmail.com' }
	]
	const [rows, setRows] = useState([]);
	let status = 'all';
	let month = 'all';
	let year = 'all';
	let association = "all"
	useEffect(() => {
		fetch('https://demouit.herokuapp.com/api/users')
			.then(response => response.json())
			.then(data => {
				console.log(data)
				// setTodos(data)
			})
		renderRows(dummyData);
	}, [])


	const renderRows = (data) => {
		const row = data.map((item, i) => (
			<tr key={i} className="dataRow" >
				<td>{i}</td>
				<td>{item.name}</td>
				<td>{item.phoneNumber}</td>
				<td>{item.association}</td>
				<td>{item.month}</td>
				<td>{item.year}</td>
				<td>{item.email}</td>
				<td>{item.status}</td>

			</tr>
		));

		setRows(row)
	}
	const filterData = () => {

		console.log(status, association, month, year)
		if (status === "all" && association === "all" && month === "all" && year === "all") {
			renderRows(dummyData)
			return;
		}
		const filteredData = dummyData.filter(item =>
			((item.status === status && item.association === association && item.month === month && item.year === year)
				|| (status === "all" && item.association === association && item.month === month && item.year === year)
				|| (item.status === status && association === "all" && item.month === month && item.year === year)
				|| (item.status === status && item.association === association && month === "all" && item.year === year)
				|| (item.status === status && item.association === association && item.month === month && year === "all")
				|| (status === "all" && association === "all" && item.month === month && year === "all")
				|| (status === "all" && association === "all" && month === "all" && item.year === year)
				|| (item.status === status && association === "all" && month === "all" && year === "all")
				|| (status === "all" && item.association === association && month === "all" && year === "all")
				|| (status === "all" && association === "all" && item.month === month && item.year === year)
				|| (item.status === status && item.association === association && month === "all" && year === "all")
				|| (status === "all" && item.association === association && month === "all" && item.year === year)
				|| (status === "all" && item.association === association && item.month === month && year === "all")
				|| (status === "all" && item.association === association && month === "all" && year === "all")
				|| (status === status && association === "all" && item.month === month && year === "all")

			))
		console.log(filteredData)

		renderRows(filteredData);
	}
	const handleStatusChange = (e) => {
		console.log(e.target.value)
		status = e.target.value
		filterData()

	}
	const handleAssociationChange = (e) => {
		console.log(e.target.value)
		association = e.target.value
		filterData()
	}
	const handleMonthChange = (e) => {
		console.log(e.target.value)
		month = e.target.value
		filterData()
	}
	const handleYearChange = (e) => {
		console.log(e.target.value)
		year = e.target.value
		filterData()
	}
	return (
		<div className="userContainer">
			<div className="filter">
				<span className="SelectContainexr" >
					Status
				 <select
						id="status"
						name="status"
						onChange={handleStatusChange}
						className="selectionButton"
					>
						<option value="all">All</option>
						<option value="approved">Approved</option>
						<option value="disapproved">Disapproved</option>
						<option value="decline" >Decline</option>
						<option value="notGenerated" >Not generated</option>

					</select>
				</span>
				<span className="SelectContainexr" >
					Association
				 <select
						id="association"
						name="association"
						onChange={handleAssociationChange}
						className="selectionButton"
					>
						<option value="all">All</option>
						<option value="samsung">Samsung</option>
						<option value="iphone">iPhone</option>
						<option value="huawie">Huawie</option>
						<option value="oppo">Oppo</option>
						<option value="realme">Realme</option>
					</select>
				</span>
				<span className="SelectContainexr" >
					Month
				 <select
						id="month"
						name="month"
						onChange={handleMonthChange}
						className="selectionButton"
					>
						<option value="all">All</option>
						<option value="jan" >Jan</option>
						<option value="feb" >Feb</option>
						<option value="march" >March</option>
						<option value="april" >April</option>
						<option value="may">May</option>
						<option value="june">June</option>
						<option value="july">July</option>
						<option value="aug">August</option>
						<option value="sep">September</option>
						<option value="oct">October</option>
						<option value="nov">November</option>
						<option value="dec">December</option>
					</select>
				</span>
				<span className="SelectContainexr" >
					Year
				 <select
						id="year"
						name="year"
						onChange={handleYearChange}
						className="selectionButton"
					>
						<option value="all">All</option>
						<option value="2020">2020</option>
						<option value="2019">2019</option>
						<option value="2018">2018</option>
						<option value="2017">2017</option>
						<option value="2016">2016</option>
					</select>
				</span>
			</div>
			<div className="table">
				<table striped bordered hover >
					<thead>
						<tr>
							<th>S.no</th>
							<th>Name</th>
							{/* <th>Class</th> */}
							<th>Phone Number</th>
							<th>Association</th>
							<th>Month</th>
							<th>Year</th>
							<th>Email</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			</div>

		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
