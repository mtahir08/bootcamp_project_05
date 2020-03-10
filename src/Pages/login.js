import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AuthAction from '../store/Actions/AuthAction';
import { Link, Redirect } from 'react-router-dom';

const Login = (props) => {
	const [input, setInput] = useState({});

	const generalHandler = (e) =>
		setInput({
			...input,
			[e.target.id]: e.target.value
		});

	const handleSumbit = () => {
		console.log(input.email, input.password);
		props.SETDATA({ email: input.email, password: input.password });
    props.history.push('/dashboard');
	};
	return (
		<div style={{ width: 400 }}>
			<h3>Sign In</h3>

			<div className="form-group">
				<label>Email address</label>
				<input
					type="email"
					className="form-control"
					placeholder="Enter email"
					id="email"
					onChange={generalHandler}
				/>
			</div>

			<div className="form-group">
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Enter password"
					id="password"
					onChange={generalHandler}
				/>
			</div>

			<div className="form-group">
				<div className="custom-control custom-checkbox">
					<input
						type="checkbox"
						className="custom-control-input"
						id="customCheck1"
					/>
					<label className="custom-control-label" htmlFor="customCheck1">
						Remember me
					</label>
				</div>
			</div>

			<button onClick={handleSumbit} className="btn btn-primary btn-block">
				Submit
			</button>
			<button>
				<Link to="/signup">Sign Up</Link>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		SETDATA: (obj) => {
			console.log(obj);
			dispatch(AuthAction.setData(obj));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
