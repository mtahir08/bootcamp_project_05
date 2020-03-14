import React from 'react'
import { Link } from 'react-router-dom'

function UserDetail(props) {
  console.log(props);
  const userData = props.userData && props.userData.data && props.userData.data.length ? props.userData.data.map(user => {
    return (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.createdAt.split('-')[0]}</td>
        <td>
          <Link
            to={{
              pathname: `/dashboard/${user._id}`,
              state: {
                user: { _id: user._id, gender: user.gender, email: user.email, updatedAt: user.updatedAt, createdAt: user.createdAt }
              }
            }}
          >View</Link>
        </td>
      </tr>
    )
  }) : ''
  return (
    <tbody>
      {userData}
    </tbody>
  )
}
export default UserDetail