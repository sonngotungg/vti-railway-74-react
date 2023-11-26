import "./CartItem2.css";

function CartItem2(props) {
    const { data, render } = props;
    return (
        <div className="CartItem2">
            <div className="CartItem2-1">ProductIcon</div>
            <div className="CartItem2-2">
                <div>ProductName</div>
                <div>Số lượng : {}</div>
                <div>Giá sản phẩm : {}</div>
                <div>Ngày order : {}</div>
            </div>
            <div className="CartItem2-3">
                <div>Thành Tiền :</div>
                {render}
            </div>
        </div>
    );
}

export default CartItem2;
