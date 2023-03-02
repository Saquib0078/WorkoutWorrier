import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='divvvv'>
    <div className='Maind'>
        <div id="heading"><p>Member Login</p></div>
<div className='Input'>
    <input type="email"
    placeholder='Email'/>
    <input type="password"
    placeholder='Password'/>
</div>
<p id="forgot">Forgot password?</p>

<div className='lastdiv'>
    <button>Login</button>
    <p>or</p>
    <button>Continue With Google</button>
</div>
      
    </div>
    <p id="last">Not a member yet? Signup now!</p>
    </div>
  )
}

export default Login
