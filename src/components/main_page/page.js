import './Style.css'
import React from 'react'
import { Outlet} from 'react-router-dom'
import Navbar from './navbar/Navbar'

function Page() {
  return (
    <div className='page-container'>
      <Navbar></Navbar>
      <div className='page-content'>
        <Outlet/>
      </div>
    </div>
  )
}
export default Page
