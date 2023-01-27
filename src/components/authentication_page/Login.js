import './Style.css'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const navRef = useRef();
  const showLogin = useRef();
  const showNavbar = () =>{
    navRef.current.classList.toggle("active")
    showLogin.current.classList.toggle("active")
  }
  
  const navigate = useNavigate();
  return (
    <div className='login-container'>
      <div className='auth' >
        <div className='left'>
          <div className='switch' ref={navRef}>
            <label className='txt'>Existing User ?</label>
            <button className='auth-btn' onClick={showNavbar}>Login</button>
          </div>
          <form>
            <label>Username</label>
            <input className='inputfield'></input>
            <label>Password</label>
            <input className='inputfield'></input>
            <button className='auth-btn' onClick={(e)=>{navigate('/home/home_page')}}>Login</button>
          </form>
        </div>
        <div className='right'>
          <div className='switch active' ref={showLogin}>
            <label className='txt'>New User ?</label>
            <button className='auth-btn' onClick={showNavbar}>Sign-up</button>
          </div>
          <form>
            <label>Username</label>
            <input className='inputfield'></input>
            <label>Email</label>
            <input className='inputfield'></input>
            <label>Password</label>
            <input className='inputfield'></input>
            <label>Confirm-Password</label>
            <input className='inputfield'></input>
            <button className='auth-btn' onClick={(e)=>{navigate('/home/home_page')}}>Sign-up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login