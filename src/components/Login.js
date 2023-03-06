import axios from 'axios'
import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import cookie from 'cookiejs';



const Login = () => {
    const navigate=useNavigate()
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  const handleEmailChange = (e) => {
    setLogin({
      ...login,
      email: e.target.value
    })
  }

  const handlePasswordChange = (e) => {
    setLogin({
      ...login,
      password: e.target.value
    })
  }

  const postLogin = async (login) => {
    try {
      const { data } = await axios.post("http://localhost:3000/login", login)
      const token = data.data.token;
      cookie.set('token', token)
      console.log(token)
      return data
      

    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await postLogin(login)
    console.log(data)

    setLogin({
      email: "",
      password: ""
    })
    navigate('/')
  }

  console.log(login)
  return (
    <div className='divvvv'>
      <div className='Maind'>
        <div id="heading"><p>Member Login</p></div>
        <form onSubmit={handleSubmit}>
          <div className='Input'>
            <input type="email"
              placeholder='Email'
              value={login.email}
              onChange={handleEmailChange}
              required
            />
            <input type="password"
              placeholder='Password'
              value={login.password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <p id="forgot">Forgot password?</p>
          <div className='lastdiv'>
            <button>Login</button>
            <p>or</p>
            <button>Continue With Google</button>
          </div>
        </form>
      </div>
      <p id="last">Not a member yet? Signup now!</p>
    </div>
  )
}

export default Login
