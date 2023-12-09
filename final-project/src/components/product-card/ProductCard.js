import { Button, Card, Input, Modal, Select } from 'antd'
import React, { useRef, useState } from 'react'

import { categoryOptions, productStatusOptions } from '../../constants'
import './ProductCard.css'

const ProductCard = ({ data }) => {
  const {
    image = '/logo192.png',
    productName,
    productType,
    price,
    productStatus,
  } = data

  const inputRef = useRef(null)
  const priceInputRef = useRef(null)
  const productNameInputRef = useRef(null)
  const updatedProductType = useRef('PHONES')
  const updatedProductStatus = useRef('NEW')

  const [openModal, setOpenModal] = useState(false)

  const handleTypeChange = (value) => updatedProductType.current = value
  const handleStatusChange = (value) => updatedProductStatus.current = value

  const handleAddToCart = () => {
    const numberOfItems = inputRef.current.input.value
    console.log({ numberOfItems })
  }

  const handleUpdate = () => {
    const updatedProductInfo = {
      ...data,
      productName: productNameInputRef.current.input.value,
      price: priceInputRef.current.input.value,
      productType: updatedProductType.current,
      productStatus: updatedProductStatus.current
    }

    console.log({
      updatedProductInfo
    })
  }

  const handleDelete = () => {
    setOpenModal(true)
  }

  const handleDeleteConfirm = () => {
    setOpenModal(false)

  }
  const handleCancel = () => {
    setOpenModal(false)

  }

  return (
    <>
      <Modal
        title="Xác nhận"
        open={openModal}
        okText='Xóa'
        cancelText='Đóng'
        onOk={handleDeleteConfirm}
        onCancel={handleCancel}
      >
        <p>Bạn có muốn xóa dữ liệu</p>
      </Modal>
      <Card style={{ width: 270, textAlign: 'center' }}>
        <img height={200} src={image} alt='item' />
        <>
          <p>{productName}</p>
          <p>{productType}</p>
          <p>{price}</p>
          <p>{productStatus}</p>
        </>
        <div className='edit-fields'>
          <Input placeholder='Nhập tên sản phẩm' ref={productNameInputRef} />
          <Select
            defaultValue={'PHONES'}
            style={{ width: 220 }}
            onChange={handleTypeChange}
            options={categoryOptions}
          />
          <Input placeholder='Nhập giá sản phẩm' ref={priceInputRef} type='number' />
          <Select
            defaultValue={'NEW'}
            style={{ width: 220 }}
            onChange={handleStatusChange}
            options={productStatusOptions}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Input ref={inputRef} type='number' />
          <Button type="primary" onClick={handleAddToCart}>Áp dụng</Button>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <Button block type="primary" onClick={handleUpdate}>Chỉnh sửa</Button>
          <Button type="primary" danger onClick={handleDelete}>Xóa sản phẩm</Button>
        </div>
      </Card>
    </>
  )
}

export default ProductCard