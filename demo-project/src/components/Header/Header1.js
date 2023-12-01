import React from "react";
import "./Header1.css";
import { Input } from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header1 = () => {
    const { Search } = Input;
    return (
        <div className="Header1">
            <div className="Header1-1">
                <div className="Header1-1-1">
                    <div>Quản lý sản phẩm</div>
                    <div>Kết nối</div>
                </div>
                <div className="Header1-1-2">
                    <div>Thông báo</div>
                    <div>Hỗ trợ</div>
                    <div>CUSTOMER</div>
                </div>
            </div>
            <div className="Header1-2">
                <div>
                    <img
                        className="Header1-image"
                        src="https://logodownload.org/wp-content/uploads/2021/03/shopee-logo-2.png"
                    />
                </div>
                <Search
                    className="Header1-input"
                    placeholder="input search text"
                    // onSearch={}
                    enterButton
                />
                <AiOutlineShoppingCart className="Header1-2-1" />
            </div>
        </div>
    );
};

export default Header1;
