import React from 'react'
import { Button, Checkbox, Divider, Input } from 'antd'

import './Filters.css'
import { categoryOptions, productStatusOptions, shippingUnitOptions } from '../../constants';

const CheckboxGroup = Checkbox.Group;

const Filters = () => {
  const handleChangeCategory = (list) => {
      // setCheckedList(list);
      console.log(list)
  };

  const handleChangeShippingUnit = (list) => {
      // setCheckedList(list);
      console.log(list)

  };

  const handleChangeProductStatus = (list) => {
      // setCheckedList(list);
      console.log(list)

  };

  const handleChangeMin = (e) => {}
  const handleChangeMax = (e) => {}
  
  const handleFilter = () => {
    console.log('filter')
  }

  const handleClear = () => {
    console.log('Clear')
  }

  const categoryOptionIds = categoryOptions.map(item => item.value)
  const shippingUnitOptionIds = shippingUnitOptions.map(item => item.value)
  const productStatusOptionIds = productStatusOptions.map(item => item.value)

  return (
    <div className='Filters'>
      <h2>BỘ LỌC TÌM KIẾM</h2>
      <h3>Theo danh mục</h3>
      <CheckboxGroup vertical options={categoryOptionIds} value={[]} onChange={handleChangeCategory} />
      <Divider />
      <h3>Đơn vị vận chuyển</h3>
      <CheckboxGroup vertical options={shippingUnitOptionIds} value={[]} onChange={handleChangeShippingUnit} />
      <Divider />
      <h3>Tình trạng</h3>
      <CheckboxGroup vertical options={productStatusOptionIds} value={[]} onChange={handleChangeProductStatus} />
      <Divider />
      <h3>Khoảng giá</h3>
      <div style={{display: 'flex', justifyContent: 'start'}}>
        <Input onChange={handleChangeMin} style={{width: '150px'}} placeholder="$ Từ" /> - <Input onChange={handleChangeMax} style={{width: '150px'}} placeholder="$ Đến" />
      </div>
      <div className='filter-actions'>
        <Button onClick={handleFilter}>Áp dụng</Button>
        <Button onClick={handleClear}>Zóa bộ lọc</Button>
      </div>
    </div>
  )
}

export default Filters