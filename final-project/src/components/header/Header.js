import React from 'react'

import './Header.css'
import Search from 'antd/es/input/Search'
import { Avatar, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {

  const handleRegister = () => {}
  const handleLogin = () => {}
  const handleLogout = () => {}
  const handleSearch = () => {}
  const navigateToHome = () => {}

  return (
    <div className='Header'>
      <div className='Header-top'>
        <span onClick={handleRegister}>Đăng kí</span> | <span onClick={handleLogin}>Đăng nhập</span>
        {/* <span onClick={handleLogout}>Logout</span> */}
      </div>
      <div className='Header-bottom'>
        <img className='logo' onClick={navigateToHome} height={50} src='/shopee.png' alt='logo' />
        <Search 
          placeholder="Tìm sản phẩm" 
          onSearch={handleSearch} 
          enterButton 
          style={{ width: 400, backgroundColor: '#f94e30' }}
        />
        <Badge count={5}>
          <Avatar className='cart-logo' icon={<ShoppingCartOutlined />} />
        </Badge>
      </div>
    </div>
  )
}

export default Header