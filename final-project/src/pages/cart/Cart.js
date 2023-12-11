import React, { useEffect, useState } from 'react';
import { Button, message, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import CartCard from '../../components/cart-card/CartCard';

import './Cart.css'
import { getOrderByStatus } from '../../redux-toolkit/slices/orderSlice';

const Cart = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.order)
  const { user } = useSelector(state => state.account)

  const userInfo = JSON.parse(localStorage.getItem('user'))
  const { id } = userInfo

  const [status, setStatus] = useState('ALL');

  useEffect(() => {
    const data = {
      accountId: id,
      orderStatus: status
    }
    dispatch(getOrderByStatus(data))
  }, [status])

  const filteredOrders = orders.filter(order => order.orderStatus === status || status === 'ALL')
  console.log({ status, orders })
  return (
    <div className='Cart'>
      <Radio.Group value={status} onChange={(e) => setStatus(e.target.value)}>
        <Radio.Button value="ALL">Tất cả</Radio.Button>
        <Radio.Button value="PENDING">Chờ thanh toán</Radio.Button>
        <Radio.Button value="DONE">Đã thanh toán</Radio.Button>
        <Radio.Button value="CANCELED">Đã hủy</Radio.Button>
      </Radio.Group>
      <div className='cart-content'>
        {
          orders.map(order => (
            <CartCard data={order} />
          ))
        }
      </div>
    </div>
  );
};
export default Cart;