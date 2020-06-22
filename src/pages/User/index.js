import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StyledUserPage from './index.styled'

const UserPage = (props) => {

  const [user, setUser] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const fetchUser = async() => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await response.json()
      setUser(data)
    }

    fetchUser()
  }, [])

  return (
    <StyledUserPage>
      {user.name}
    </StyledUserPage>
  )
}

export default UserPage
