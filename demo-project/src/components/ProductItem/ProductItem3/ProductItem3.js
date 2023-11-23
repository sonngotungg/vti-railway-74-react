import { Button, InputNumber } from "antd";
import "./ProductItem3.css";

function ProductItem3() {
    const onChange = (value) => {
        console.log("changed", value);
    };
    return (
        <div className="ProductItem3-1">
            <div className="ProductItem3-ProductImg">Ảnh sản phẩm</div>
            <div>Tên sản phẩm</div>
            <div>
                <div>Giá :</div>
                <div>Tình trạng :</div>
                <div>Đon vị vận chuyển :</div>
                <div>Danh mục :</div>
                <div>
                    <InputNumber min={1} max={999999} onChange={onChange} />
                    <Button type="primary">Thêm vào giỏ </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem3;
