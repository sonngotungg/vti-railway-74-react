import React, { useEffect, useState } from 'react'

import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderByStatus } from '../../redux-toolkit/slices/orderSlice'

export const Cart = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.account);
  const {orders} = useSelector(state => state.order);
  
  const [orderStatus, setOrderStatus] = useState('PENDING')

  useEffect(() => {
    const data = {
      accountId: user?.id,
      orderStatus: orderStatus
    }
    dispatch(getOrderByStatus(data))
  }, [])

  return (
    <div>
      <div>Process Tabs</div>
      {/* Cart Item List */}
      {orders.map(order => {

        return (
          <div key={order.id}>
            <img height={150} src={order.image} />
            <p>{order.productName}</p>
            <p>{order.productType}</p>
            <p>{order.price}</p>
            <p>{order.productStatus}</p>
            <p>{order.amount}</p>
          </div>
        )
      })}
    </div>
  )
}