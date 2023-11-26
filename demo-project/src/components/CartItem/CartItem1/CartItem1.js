import "./CartItem1.css";

function CartItem1(props) {
    const { data, render } = props;
    return (
        <div className="CartItem1">
            <div className="CartItem1-1">ProductIcon</div>
            <div className="CartItem1-2">
                <div>ProductName</div>
                <div>Số lượng : {}</div>
                <div>Giá sản phẩm : {}</div>
                <div>Ngày order : {}</div>
            </div>
            <div className="CartItem1-3">
                <div>Thành Tiền :</div>
                {render}
            </div>
        </div>
    );
}

export default CartItem1;
