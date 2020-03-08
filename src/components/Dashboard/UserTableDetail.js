import React from 'react'
import { Link } from 'react-router-dom'

function UserDetail(props) {
  console.log('props', props)
  const userData = props.userData.map(user => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.company.bs}</td>
        <td>2003</td>
        <td>{user.address.street}</td>
        <td>{user.address.city}</td>
        <td>{user.company.name}</td>
        <td>
        <Link to="/dashboard">Go Back</Link>
        <br/>
          <Link to={`/dashboard/${user.id}`}>View</Link>
          
        </td>

      </tr>
    )
  })
  return (
    <tbody>
      {userData}
    </tbody>
  )
}
export default UserDetail