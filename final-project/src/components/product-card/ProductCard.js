import { Button, Card, Input, Modal, Select } from 'antd'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { categoryOptions, productStatusOptions } from '../../constants'
import { createOrder } from '../../redux-toolkit/slices/orderSlice'

import './ProductCard.css'

const ProductCard = ({ data, isAdmin }) => {
  const {
    image = '/logo192.png',
    productName,
    productType,
    price,
    productStatus,
  } = data

  const dispatch = useDispatch()

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

    const newOrder = {
      accountId: '',
      productId: '',
      quantity: numberOfItems
    }

    dispatch(createOrder(newOrder))
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
        {!isAdmin && (
          <>
            <>
              <p>{productName}</p>
              <p>{productType}</p>
              <p>{price}</p>
              <p>{productStatus}</p>
            </>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Input ref={inputRef} type='number' min={0} />
              <Button type="primary" onClick={handleAddToCart}>Áp dụng</Button>
            </div></>
        )}
        {isAdmin && (
          <>
            <div className='edit-fields'>
              <Input defaultValue={productName} placeholder='Nhập tên sản phẩm' ref={productNameInputRef} />
              <Select
                defaultValue={'PHONES'}
                style={{ width: 220 }}
                onChange={handleTypeChange}
                options={categoryOptions}
              />
              <Input defaultValue={price} placeholder='Nhập giá sản phẩm' ref={priceInputRef} type='number' min={0} />
              <Select
                defaultValue={'NEW'}
                style={{ width: 220 }}
                onChange={handleStatusChange}
                options={productStatusOptions}
              />
            </div>
            <div className='edit-actions'>
              <Button type="primary" onClick={handleUpdate}>Chỉnh sửa</Button>
              <Button type="primary" danger onClick={handleDelete}>Xóa sản phẩm</Button>
            </div>
          </>
        )}
      </Card>
    </>
  )
}

export default ProductCard