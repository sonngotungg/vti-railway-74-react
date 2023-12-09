import React from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'

import { orderStatusOptions } from '../../constants'
import { buyOrder, cancelBuy } from '../../redux-toolkit/slices/orderSlice'

import './CartCard.css'

const CartCard = ({ data }) => {
  const dispatch = useDispatch()
  const {
    id,
    image = '/logo192.png',
    productName,
    productType,
    price,
    productStatus
  } = data?.product || {}
  const status = data?.orderStatus

  const handleBuy = () => dispatch(buyOrder(id))
  const handleCancelBuy = () => dispatch(cancelBuy(id))

  const orderStatus = orderStatusOptions.find(option => option.id === status).title

  return (
    <div className='CartCard'>
      <img height={200} src={'/logo192.png'} alt='item' />
      <div className='cart-item-basic-info'>
        <h3>{'productName'}</h3>
        <p>Số lượng: {'productType'}</p>
        <p>Giá sản phẩm: {'price'}đ</p>
        <p>Ngày order: {'productStatus'}</p>
      </div>
      <div className='item-status'>
        <h3 style={{ color: '#f94e30' }}>Thành tiền: {0}đ</h3>
        {status !== 'PENDING' && (
          <p>Trạng thái: {orderStatus}</p>
        )}
        {status === 'PENDING' && (
          <div className='cart-actions'>
            <Button style={{ background: '#f94e30', color: 'white' }} onClick={handleBuy}>Mua hàng</Button>
            <Button onClick={handleCancelBuy}>Hủy đơn hàng</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartCard