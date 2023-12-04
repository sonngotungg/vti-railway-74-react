import React, { useRef } from 'react'
import './Filters.css'
const Filters = () => {
  return (
    <React.Fragment>
        <div><h3>BỘ LỌC TÌM KIẾM</h3></div>
        <div>Theo danh mục</div><br/>
         <div>
          <div><input type="checkbox" />Điện Thoại</div><br/>
          <div><input type="checkbox" />Quần Áo</div><br/>
          <div><input type="checkbox" />Giày Dép</div><br/>
          <div><input type="checkbox" />Đồ Ăn</div><br/>
          <div><input type="checkbox" />Máy Tính</div><br/>
         </div>
         <div>Đơn vị vận chuyển</div><br/>
          <div>
           <div><input type="checkbox" />Nhanh</div><br/>
           <div><input type="checkbox" />Tiết kiệm</div><br/>
           <div><input type="checkbox" />Hoả tốc</div><br/>
          </div>
         <div>Tình trạng</div><br/>
         <div>
          <div><input type="checkbox" />Mới</div><br/>
          <div><input type="checkbox" />Đã qua sử dụng</div><br/>
         </div>
         <div>Khoảng giá</div><br/>
         <div>
           <input></input>   <input></input>
         </div>
         <div><button onClick="Áp dụng">Áp Dụng</button></div>
          
         <div><button onClick="Áp dụng">Xoá Bộ Lọc</button></div>
        
    </React.Fragment>
    
  )
}

export default Filters