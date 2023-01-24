import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='name-container'>
          <h1>Wake-up Cafe</h1>
        </div>
        <div className='link-container'>
        <ul>
            <CustomLink to='/home_page'>Home</CustomLink>
            <CustomLink to='/drinks'>Drinks</CustomLink>
            <CustomLink to='/extras'>Extras</CustomLink>
            <CustomLink to='/checkout'>Checkout</CustomLink>
        </ul>
        </div>
    </div>
  )
}

function CustomLink({to,children,...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path:resolvedPath.pathname,end:true})
      return(
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar