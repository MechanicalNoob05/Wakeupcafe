import React from 'react'
import './Style.css'
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom'

function Menu(props) {
  return (
    <div className='menubar'>
        <div>
        <ul>
            <CustomLink to='drinks'>Drinks</CustomLink>
            <CustomLink to='extras'>Ready to Eat</CustomLink>
        </ul>
        </div>
        <div className='menu-container'>
            <Outlet></Outlet>
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

export default Menu