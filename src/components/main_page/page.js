import './Style.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home_page from '../pages/Home/Home_page'
import Navbar from './navbar/Navbar'
import Drinks from '../pages/Drinks/Drinks'
import Extra from '../pages/extras/Extra'
import Checkout from '../pages/Checkout/Checkout'

function Page() {
  return (
    <div className='page-container'>
      <Navbar></Navbar>
      <div className='page-content'>
        <Routes>
          <Route path='/home_page' element={<Home_page></Home_page>}/>
          <Route path='/drinks' element={<Drinks></Drinks>}/>
          <Route path='/extra' element={<Extra></Extra>}/>
          <Route path='/checkout' element={<Checkout></Checkout>}/>
        </Routes>
      </div>
    </div>
  )
}
export default Page
