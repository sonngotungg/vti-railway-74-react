import { Button, InputNumber, Input } from "antd";
import "./ProductItem1.css";
import React from "react";
import { useRef } from "react";
import { login } from "../../apis/accountApi.js";

// const onChange = (value) => {
//     console.log("changed", value);
// };
// const usernameRef = useRef();
// const submit = (e) => {
//     const username = usernameRef.current.value;

//     console.log(username);
// };
function ProductItem1() {
    const onChange = (value) => {
        // console.log("changed", value);
    };
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const submit = (e) => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log(usernameRef.current.value);
        login({ username, password });
    };
    return (
        <div className="ProductItem1-1">
            <div className="ProductItem1-ProductImg">
                <img src="https://static.cdnno.com/poster/bat-dau-hoang-thien-de-huynh-truong-ta-thu-hoach-duoc-max-cap-ngo-tinh/600.jpg?1665650611" />
            </div>
            <div>Tên sản phẩm</div>
            <div>
                <div>Giá :</div>
                <div>Tình trạng :</div>
                <div>Đon vị vận chuyển :</div>
                <div>Danh mục :</div>
                <div>
                    <InputNumber min={1} max={999999} onChange={onChange} />
                    <Button type="primary" onClick={submit}>
                        Áp dụng{" "}
                    </Button>
                    <input ref={usernameRef} />
                    <input ref={passwordRef} />
                    {/* <Input placeholder="Basic usage" ref={usernameRef} />
                    <Input placeholder="Basic usage" /> */}
                </div>
                <div className="ProductItem1-2">
                    <div>trái tim</div>
                    <div>88 Đã bán</div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem1;
