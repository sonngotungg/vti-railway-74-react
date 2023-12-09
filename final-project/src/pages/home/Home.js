import React, { useEffect, useState } from 'react'
import { Button, Empty, Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import Filters from '../../components/filters/Filters'
import ProductForm from '../../components/product-form/ProductForm'
import ProductCard from '../../components/product-card/ProductCard'
import Header from '../../components/header/Header'
import { getProducts, setFilters } from '../../redux-toolkit/slices/productSlice'

import './Home.css'

const Home = () => {
  const dispatch = useDispatch();
  const { filters, products } = useSelector(state => state.product)

  const [openProductForm, setOpenProductForm] = useState(false)

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const isAdmin = localStorage.getItem('user-role') === 'ADMIN'

  const handlePagination = (pageIndex) => {
    const updatedFilters = {
      ...filters,
      page: pageIndex
    };
    dispatch(setFilters(updatedFilters))
    dispatch(getProducts(updatedFilters));
  }

  return (
    <>
      <Header />
      <div className="Layout1">
        <div className="Layout1-1">
          <Filters />
        </div>
        <div className="Layout1-2">
          {isAdmin && (
            <div className="Layout1-3">
              <Button style={{ width: 'fit-content' }} size='large' type="primary" onClick={() => setOpenProductForm(true)}>
                Tạo Sản Phẩm
              </Button>
            </div>
          )}
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
                products.map(item => (
                  <ProductCard key={item.id} data={item} isAdmin={isAdmin} />
                ))
              }
            </div>
            {products.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
            {products.length > 0 && (
              <Pagination
                current={filters.current}
                onChange={handlePagination}
                total={50}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home