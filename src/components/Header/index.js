import React from 'react'
import StyledHeader from './index.styled'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/users">
        <div className='headerLink'>Users</div>
      </Link>
    </StyledHeader>
  )
}

export default Header
