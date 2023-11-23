import { Button, InputNumber } from "antd";
import "./ProductItem1.css";

function ProductItem1() {
    const onChange = (value) => {
        console.log("changed", value);
    };
    return (
        <div className="ProductItem1-1">
            <div className="ProductItem1-ProductImg">Ảnh sản phẩm</div>
            <div>Tên sản phẩm</div>
            <div>
                <div>Giá :</div>
                <div>Tình trạng :</div>
                <div>Đon vị vận chuyển :</div>
                <div>Danh mục :</div>
                <div>
                    <InputNumber min={1} max={999999} onChange={onChange} />
                    <Button type="primary">Áp dụng </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem1;
