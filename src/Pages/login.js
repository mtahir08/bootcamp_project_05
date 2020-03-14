import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AuthAction from '../store/Actions/AuthAction';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import '../styles/login.css';

const Login = (props) => {
	const [input, setInput] = useState({});
	useEffect(() => {
		saveDateToStoreAndNav();
	}, [props.user])
	const saveDateToStoreAndNav = () => {
		const data = props.user;
		if (data.user) {
			if (data.user.role === "S")
				props.history.push('/studentDashboard');
			else
				props.history.push('/dashboard');
		}
	}
	const generalHandler = (e) =>
		setInput({
			...input,
			[e.target.id]: e.target.value
		});

	const handleSumbit = async () => {
		props.SETDATA({ email: input.email, password: input.password });
	};

	return (
		<div
			className="login-main"
		>
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
		user: state.authReducer.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		SETDATA: (obj) => {
			dispatch(AuthAction.setData(obj));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
