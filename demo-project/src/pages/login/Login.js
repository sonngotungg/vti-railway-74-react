import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { loginAsync } from '../../redux-toolkit/slices/accountSlice'

import './Login.css'

const Login = () => {
  const dispatch = useDispatch();

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = () => {
    const payload = {
        username: usernameRef.current.value,
        password: passwordRef.current.value
    }
    dispatch(loginAsync(payload))
  }
  return (
    <div className='Login'>
        Username: <input ref={usernameRef} type='text' />
        Password: <input ref={passwordRef} type='text' />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login