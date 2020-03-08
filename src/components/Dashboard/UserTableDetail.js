import React from 'react'
import { Link } from 'react-router-dom'

function UserDetail(props) {
  const userData = props.userData.length ? props.userData.map(user => {
    return (
      <tr key={user.id}>
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
  }) : null
  return (
    <tbody>
      {userData}
    </tbody>
  )
}
export default UserDetail