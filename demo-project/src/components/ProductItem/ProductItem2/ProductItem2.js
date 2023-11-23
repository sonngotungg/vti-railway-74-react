import { Button } from "antd";
import "./ProductItem2.css";

function ProductItem2() {
    return (
        <div className="ProductItem2-1">
            <div className="ProductItem2-ProductImg">Ảnh sản phẩm</div>
            <div>Tên sản phẩm</div>
            <div>
                <div>Giá :</div>
                <div>Tình trạng :</div>
                <div>Đon vị vận chuyển :</div>
                <div>Danh mục :</div>
                <div>
                    <Button type="primary">Chỉnh sửa</Button>
                    <Button type="primary">Áp dụng</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem2;
