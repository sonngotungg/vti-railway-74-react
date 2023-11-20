import React from 'react'
import { Pagination } from 'antd'

import './ProductList.css'

const ProductList = ({ data }) => {
  const handlePagination = (pageIndex) => {
    console.log({pageIndex})
  }

  return (
    <>
      <div className='ProductList'>
        {data.map(item => {

          return (
            <div key={item.id}>
              <img height={150} src={item.image} />
              <p>{item.productName}</p>
              <p>{item.productType}</p>
              <p>{item.price}</p>
              <p>{item.productStatus}</p>
            </div>
          )
        })}
      </div>
      {data.length > 0 && (
        <Pagination 
          current={1} 
          onChange={handlePagination} 
          total={50} 
        />
      )}
    </>
  )
}

export default ProductList