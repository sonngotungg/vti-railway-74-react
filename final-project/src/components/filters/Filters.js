import React, { useState } from 'react'
import { Button, Checkbox, Divider, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux';

import { categoryOptions, productStatusOptions, shippingUnitOptions } from '../../constants';
import { getProducts, setFilters } from '../../redux-toolkit/slices/productSlice';

import './Filters.css'

const CheckboxGroup = Checkbox.Group;

const Filters = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector(state => state.product)

  const [categoryList, setCategoryList] = useState([])
  const [shippingUnitList, setShippingUnitList] = useState([])
  const [productStatusList, setProductStatusList] = useState([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)

  const handleFilter = () => {
    const filterData = {
      ...filters,
      maxPrice,
      minPrice,
      productStatus: productStatusList,
      productTypes: categoryList,
      shippingUnits: shippingUnitList
    }
    dispatch(setFilters(filterData))
    dispatch(getProducts(filterData));
  }

  const handleClear = () => {
    console.log('Clear')
    setCategoryList(prev => [])
    setShippingUnitList(prev => [])
    setProductStatusList(prev => [])
    setMinPrice(prev => 0)
    setMaxPrice(prev => 0)

    const filterData = {
      ...filters,
      maxPrice,
      minPrice,
      productStatus: productStatusList,
      productTypes: categoryList,
      shippingUnits: shippingUnitList
    }
    dispatch(setFilters(filterData))
    dispatch(getProducts(filterData));
  }

  const categoryOptionIds = categoryOptions.map(item => item.value)
  const shippingUnitOptionIds = shippingUnitOptions.map(item => item.value)
  const productStatusOptionIds = productStatusOptions.map(item => item.value)

  return (
    <div className='Filters'>
      <h2>BỘ LỌC TÌM KIẾM</h2>
      <h3>Theo danh mục</h3>
      <CheckboxGroup vertical options={categoryOptionIds} value={categoryList} onChange={setCategoryList} />
      <Divider />
      <h3>Đơn vị vận chuyển</h3>
      <CheckboxGroup vertical options={shippingUnitOptionIds} value={shippingUnitList} onChange={setShippingUnitList} />
      <Divider />
      <h3>Tình trạng</h3>
      <CheckboxGroup vertical options={productStatusOptionIds} value={productStatusList} onChange={setProductStatusList} />
      <Divider />
      <h3>Khoảng giá</h3>
      <div style={{ display: 'flex', justifyContent: 'start' }}>
        <Input
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ width: '150px' }}
          placeholder="$ Từ"
          type='number'
        /> -
        <Input
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ width: '150px' }}
          placeholder="$ Đến"
          type='number'
        />
      </div>
      <div className='filter-actions'>
        <Button onClick={handleFilter}>Áp dụng</Button>
        <Button onClick={handleClear}>Xóa bộ lọc</Button>
      </div>
    </div>
  )
}

export default Filters