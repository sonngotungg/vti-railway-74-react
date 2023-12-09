import { Button, Input, Modal, Select } from 'antd'
import React, { useRef } from 'react'
import { categoryOptions, productStatusOptions, shippingUnitOptions } from '../../constants'

const ProductForm = ({ openModal, setOpenModal }) => {
  const productNameRef = useRef(null)
  const productImageRef = useRef(null)
  const productPriceRef = useRef(null)
  const newProductStatus = useRef('')
  const newProductType = useRef('')
  const newShippingUnit = useRef('')

  const handleStatusChange = (value) => newProductStatus.current = value
  const handleShippingUnitChange = (value) => newShippingUnit.current = value
  const handleTypeChange = (value) => newProductType.current = value

  const handleOk = () => {
    const newProduct = {
      image: productImageRef.current.input.value,
      price: productPriceRef.current.input.value,
      productName: productNameRef.current.input.value,
      productStatus: newProductStatus.current,
      productType: newProductType.current,
      shippingUnit: newShippingUnit.current
    }

    console.log({ newProduct })
    setOpenModal(false)
  }
  const handleCancel = () => {
    setOpenModal(false)
  }

  return (
    <Modal title="Update Sản Phẩm" open={openModal} okText='Tạo' cancelText='Hủy' onOk={handleOk} onCancel={handleCancel}>
      <h3>Tên sản phẩm</h3>
      <Input placeholder='Nhập tên sản phẩm' ref={productNameRef} style={{ width: '400px' }} />
      <h3>Ảnh sản phẩm</h3>
      <Input placeholder='Nhập link ảnh' ref={productImageRef} style={{ width: '400px' }} />
      <h3>Giá</h3>
      <Input placeholder='Nhập giá sản phẩm' type='number' ref={productPriceRef} style={{ width: '400px' }} />
      <h3>Tình trạng sản phẩm</h3>
      <Select
        defaultValue={'NEW'}
        style={{ width: 250 }}
        onChange={handleStatusChange}
        options={productStatusOptions}
      />
      <h3>Đơn vị vận chuyển</h3>
      <Select
        defaultValue={'EXPRESS'}
        style={{ width: 250 }}
        onChange={handleShippingUnitChange}
        options={shippingUnitOptions}
      />
      <h3>Loại sản phẩm</h3>
      <Select
        defaultValue={'PHONES'}
        style={{ width: 250 }}
        onChange={handleTypeChange}
        options={categoryOptions}
      />
    </Modal>
  )
}

export default ProductForm