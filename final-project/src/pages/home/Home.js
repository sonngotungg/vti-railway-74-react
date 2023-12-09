import React, { useState } from 'react'
import { Button, Pagination } from 'antd'

import Header from '../../components/header/Header'
import Filters from '../../components/filters/Filters'
import ProductForm from '../../components/product-form/ProductForm'
import ProductCard from '../../components/product-card/ProductCard'
import { productMockData } from '../../mock/mock'

import './Home.css'

const Home = () => {
  const [openProductForm, setOpenProductForm] = useState(false)

  return (
    <div>
      <Header />
      <div className="Layout1">
        <div className="Layout1-1">
          <Filters />
        </div>
        <div className="Layout1-2">
          <div className="Layout1-3">
            <Button style={{ width: 'fit-content' }} size='large' type="primary" onClick={() => setOpenProductForm(true)}>
              Tạo Sản Phẩm
            </Button>
          </div>
          <div className="Layout1-4">
            {/* content */}
            {openProductForm && (
              <ProductForm
                setOpenModal={setOpenProductForm}
                openModal={openProductForm}
              />
            )}
            <div className='product-list'>
              {
                productMockData.content.map(item => (
                  <ProductCard key={item.id} data={item} />
                ))
              }
            </div>
            <Pagination defaultCurrent={1} total={50} />
          </div>
          <div className="Layout1-5">footer</div>
        </div>
      </div>
    </div>
  )
}

export default Home