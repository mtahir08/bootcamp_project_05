import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AuthAction from '../store/Actions/AuthAction';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import '../styles/login.css';

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
		<div className="login-main" >
			
			 <div className="div-icon">
			 <FontAwesomeIcon className="env-icon" icon={faEnvelope} />
			 </div>
			 <div className="login-heading" >Login</div>
			 <div className="login-form-container">
			<div className="form-group">
				<label className="labels email-label" >Email Address</label>
				<input
					type="email"
					className="form-control"
					// placeholder="Enter email"
					id="email"
					onChange={generalHandler}
				/>
			</div>

			<div className="form-group">
				<label className="labels password-label" >Password</label>
				<input
					type="password"
					className="form-control"
					// placeholder="Enter password"
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
					{/* <label className="custom-control-label remember-label " htmlFor="customCheck2">
						Remember me
					</label> */}
				</div>
			</div>

			<button onClick={handleSumbit} className="btn btn-block login-btn">
				SUBMIT
			</button>
			<div className="btn-signup">
				Haven't account ?
				<Link to="/signup"> Sign Up</Link>
			</div>
			</div>
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
