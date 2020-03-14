import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthAction from '../store/Actions/AuthAction';

import EmailJsServive from '../Services/EmailJS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../styles/signup.css';

const SignUp = (props) => {
	const [input, setInput] = useState({});

	const generalHandler = (e) =>
		setInput({
			...input,
			[e.target.id]: e.target.value
		});

	const SignUpEmail = (obj) => {
		const _SenderEmail = 'mtalha31298@gmail.com';

		var templateParams = {
			senderEmail: _SenderEmail,
			receiverEmail: obj.email,
			toName: obj.name,
			password: obj.password
		};

		EmailJsServive.sendEmailJsServive(
			'template_qvwIRLwF',
			templateParams,
			'user_b1UkLL3dEM69Pcb8vrtT2'
		);
	};

	const handleSubmit = () => {
		var obj = {
			email: input.email,
			password: input.password,
			name: `${input.firstName} ${input.lastName}`
		};
		SignUpEmail(obj);

		props.ADD({
			email: input.email,
			password: input.password,
			name: `${input.firstName} ${input.lastName}`
		});
	};
	return (
		<div 
		className="signup-main"
		>
			<div className="div-icon">
			 <FontAwesomeIcon className="env-icon" icon={faEnvelope} />
			 </div>
			 <div className="login-heading" >Sign Up</div>
			 <div className="form-container">
			<div className="form-group">
				<label className="labels" >First name</label>
				<input
					type="text"
					className="form-control"
					id="firstName"
					onChange={generalHandler}
				/>
			</div>

			<div className="form-group">
				<label className="labels" >Last name</label>
				<input
					type="text"
					className="form-control"
					id="lastName"
					onChange={generalHandler}
				/>
			</div>

			<div className="form-group">
				<label className="labels email-label" >Email address</label>
				<input
					type="email"
					className="form-control"
					id="email"
					onChange={generalHandler}
				/>
			</div>

			<div className="form-group">
				<label className="labels" >Password</label>
				<input
					type="password"
					className="form-control password-field"
					id="password"
					onChange={generalHandler}
				/>
			</div>

			<button onClick={handleSubmit} className="btn btn-block signup-btn">
				SUBMIT
			</button>
			<div className="btn-login">
				Already have an account ?
				<Link to="/"> Login</Link>
			</div>
			</div>
		</div>
	);
};

function mapDispatchToProps(dispatch) {
	return {
		ADD: (obj) => {
			console.log(obj);
			dispatch(AuthAction.add(obj));
		}
	};
}

export default connect(null, mapDispatchToProps)(SignUp);
