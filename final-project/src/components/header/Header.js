import React from 'react'
import Search from 'antd/es/input/Search'
import { Avatar, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../redux-toolkit/slices/accountSlice';
import { getProducts } from '../../redux-toolkit/slices/productSlice';

import './Header.css'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { filters } = useSelector(state => state.product);
  const { orders } = useSelector(state => state.order);

  const isAuthenticated = localStorage.getItem('access-token')

  const handleLogin = () => {
    navigate('login')
  }

  const handleRegister = () => {
    navigate('register')
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  }

  const navigateToCart = () => {
    navigate('cart')
  }

  const handleSearch = (data) => {
    const updatedFilters = {
      ...filters,
      productName: data
    };

    // dispatch(setFilters(updatedFilters))
    dispatch(getProducts(updatedFilters));
  }

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <div className='Header'>
      <div className='Header-top'>
        {!isAuthenticated && (
          <>
            <span className='Header-action' onClick={handleRegister}>Đăng kí</span> | <span className='Header-action' onClick={handleLogin}>Đăng nhập</span>
          </>
        )}
        {isAuthenticated && <span className='Header-action' onClick={handleLogout}>Logout</span>}
      </div>
      <div className='Header-bottom'>
        <img className='logo' onClick={navigateToHome} height={50} src='/shopee.png' alt='logo' />
        <Search
          placeholder="Tìm sản phẩm"
          onSearch={handleSearch}
          enterButton
          style={{ width: 400, backgroundColor: '#f94e30' }}
        />
        <Badge count={orders.length}>
          <Avatar
            className='cart-logo'
            icon={<ShoppingCartOutlined />}
            onClick={navigateToCart}
          />
        </Badge>
      </div>
    </div>
  )
}

export default Header