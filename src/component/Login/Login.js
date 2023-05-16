import React from 'react'
import './Login.css'
import { red } from '@material-ui/core/colors'


const Login = () => {
  return (
    <div className='login'>
        <div className='login-container'> 
           <p className='login-p'>Sign in</p>

           <div className='login-content'>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <span className='forgot'>Forget Password ?</span>
                <a href="" className='first-a' style={{
                   color: "white"
                }} >Login</a>
                <div style={{
                  display: 'flex',
                }}>
                <p>________________ </p><span style={{
                  margin: '0 3px'
                }}>or</span><p> ________________</p>
                </div>
                <a href=""  style={{
                  padding:" 0.4rem 6.1rem 0.4rem 6.1rem",
                }}>Sign in with Google</a>
                <a href="" style={{
                  padding:" 0.4rem 7.5rem 0.4rem 7.6rem",
                }}>Join Now</a>
           </div>
        </div>
    </div>
  )
}

export default  Login