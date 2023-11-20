import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons';

import { logout } from '../../redux-toolkit/slices/accountSlice'

import './Header.css'
import Search from 'antd/es/input/Search';

export const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {user} = useSelector(state => state.account);

  const isAuthenticated = localStorage.getItem('access-token')

  const handleLogin = () => {
    navigate('login')
  }

  const handleRegister = () => {
    navigate('register')
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  const navigateToCart = () => {
    navigate('cart')
  }

  const onSearch = () => {}

  return (
    <div className='Header'>
      <div className='Header-top'>
        <div>
          <p>Kênh người bán</p>
        </div>
        {!isAuthenticated && (
          <div className='Header-actions'>
            <button onClick={handleRegister}>Register</button>
            |
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </div>
      <div className='Header-bottom'>
        <img height={50} src='/shopee.png' alt='logo' />
        <Search 
          placeholder="input search text" 
          onSearch={onSearch} 
          enterButton 
          style={{ width: 200, backgroundColor: '#f94e30' }}
        />
        <div>
          {(!user || user?.role === 'CUSTOMER') && (
            <button onClick={navigateToCart}>
              Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}