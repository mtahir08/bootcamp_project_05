import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthAction from '../store/Actions/AuthAction';

import EmailJsServive from '../Services/EmailJS';

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
		<div style={{ width: 400 }}>
			{/* <form onSubmit={this.handleSubmit}> */}
			<h3>Sign Up</h3>

			<div className="form-group">
				<label>First name</label>
				<input
					type="text"
					className="form-control"
					placeholder="First name"
					id="firstName"
					onChange={generalHandler}
				/>
			</div>

			<div className="form-group">
				<label>Last name</label>
				<input
					type="text"
					className="form-control"
					placeholder="Last name"
					id="lastName"
					onChange={generalHandler}
				/>
			</div>

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

			<button className="btn btn-primary btn-block" onClick={handleSubmit}>
				Sign Up
			</button>
			<p className="forgot-password text-right">
				Already registered <a href="#">sign in?</a>
			</p>
			{/* </form> */}
			<button>
				<Link to="/">Sign In</Link>
			</button>
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
