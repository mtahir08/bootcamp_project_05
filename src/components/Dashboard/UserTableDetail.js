import React from 'react'
import { Link } from 'react-router-dom'

function UserDetail(props) {
  console.log('props', props)
  const userData = props.userData.map(user => {
    return (
      <tr key={user.id}>
        <td>{user._id}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.createdAt.split('-')[0]}</td>
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