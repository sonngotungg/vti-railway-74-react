import React from 'react'

import './Cart.css'
import { useSelector } from 'react-redux'

export const Cart = () => {
  const {orders} = useSelector(state => state.order)

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