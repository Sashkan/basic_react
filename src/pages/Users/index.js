import React, { useEffect, useState } from 'react'
import StyledUsersPage from './index.styled'
import UserBox from '../../components/UserBox'

const UsersPage = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async() => {

      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()

      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <StyledUsersPage>
      <h1>Users</h1>
      {users.map((user) => {
        return <UserBox user={user} />
      })}
    </StyledUsersPage>
  )
}

export default UsersPage
