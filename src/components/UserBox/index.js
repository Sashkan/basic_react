import React from 'react'
import StyledUserBox from './index.styled'
import { Link } from 'react-router-dom'

const UserBox = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`}>
      <StyledUserBox>
        {user.name}
      </StyledUserBox>
    </Link>
  )
}

export default UserBox
