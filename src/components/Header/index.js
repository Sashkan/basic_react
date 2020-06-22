import React from 'react'
import StyledHeader from './index.styled'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <StyledHeader>
      <div className='headerLink'><Link to="/users">Users</Link></div>
    </StyledHeader>
  )
}

export default Header
