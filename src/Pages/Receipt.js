import React, { Component } from 'react'
import {Table} from "react-bootstrap"
import {  Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
export default class Receipt extends Component {
    state = {
        userDetail : [],
    }
   
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(response2 => {
            this.setState({userDetail:response2})
            console.log(this.state.userDetail)
        })
    }
  render() {
    const userData = this.state.userDetail.map(user => {
		return (
			<tr key={user.id}>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>{user.phone}</td>
				<td>{user.company.bs}</td>
				<td>2003</td>
				<td>{false.toString()}</td>
				<Link to={`/receipt/123/${user.id}`}>View Details</Link>
			</tr>
		)

	})
    return (
      <>
      
        <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Sent At</th>
                            <th>Create At</th>
                            <th>Update At</th>
                            <th>Year</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData}
                    </tbody>
                </Table>
               l<Link to={`/receipt/add`}> <Fab color="primary" aria-label="add" style={{"float" : "right"}}>
                 <AddIcon />
                </Fab></Link>
            </div>
      </>
    )
  }
}
