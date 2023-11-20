import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductList from '../../components/product-list/ProductList'
import { getProducts } from '../../redux-toolkit/slices/productSlice'

import './Home.css'

const Home = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.product)

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <div className='Home'>
        <ProductList data={products} />
    </div>
  )
}

export default Home