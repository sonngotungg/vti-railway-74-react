import React from 'react'

import './Register.css'
import { useDispatch } from 'react-redux'
import { register } from '../../apis/accountApi'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const data = {
        username: '',
        password: ''
      }
      await register(data)
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div>Register</div>
    <button onClick={handleRegister}>Register</button>
    </>
  )
}

export default Register