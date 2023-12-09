import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';

import { cartProgressSteps } from '../../constants';

import './Cart.css'
import CartCard from '../../components/cart-card/CartCard';

const Cart = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = cartProgressSteps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className='Cart'>
      <Steps current={current} items={items} />
      <div className='cart-content'>
        {/* {cartProgressSteps[current].content} */}
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
      <div style={{ marginTop: 24 }} >
        {current < cartProgressSteps.length - 1 && (
          <Button type="primary" size='large' style={{ width: '200px' }} onClick={() => next()}>
            Next
          </Button>
        )}
        {current === cartProgressSteps.length - 1 && (
          <Button type="primary" size='large' style={{ width: '200px' }} onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            size='large'
            style={{
              margin: '0 8px',
              width: '200px'
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};
export default Cart;