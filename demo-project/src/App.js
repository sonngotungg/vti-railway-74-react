import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./page/home";
// import Login from "./page/login";
// import Layout1 from "./components/Layout/Layout1/Layout1";
// import Layout2 from "./components/Layout/Layout2/Layout2";
// import Layout3 from "./components/Layout/Layout3/Layout3";
// import Layout4 from "./components/Layout/Layout4/Layout4";
// import ProductItem1 from "./components/ProductItem/ProductItem1/ProductItem1";
// import ProductItem2 from "./components/ProductItem/ProductItem2/ProductItem2";
// import ProductItem3 from "./components/ProductItem/ProductItem3/ProductItem3";
// import CartItem1 from "./components/CartItem/CartItem1/CartItem1";
// import CartItem2 from "./components/CartItem/CartItem2/CartItem2";
// import ProcessTab1 from "./components/ProcessTabs/ProcessTab1/ProcessTab1";
import Header1 from "./components/Header/Header1";
import { useEffect } from "react";
import axios from "axios";

import { login } from "./apis/accountApi";
import { Button } from "antd";

function App() {
    const ActionButtons = () => {
        return (
            <>
                <Button>Mua hàng</Button>
                <Button>Hủy đơn hàng</Button>
            </>
        );
    };
    useEffect(() => {
        // console.log("after render - only 1 time after mounting");
        // axios({
        //     method: "post",
        //     url: "http://localhost:8888/api/v1/auth/register",
        //     data: { username: "ư123", password: "12325465" },
        // })
        //     .then((response) => console.log(response))
        //     .catch((err) => console.log(err));
        // login();
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Header1
                            // render={<p>Trạng thái: Chờ thanh toán</p>}
                            ></Header1>
                            // <CartItem2 render={<ActionButtons />}></CartItem2>
                            // <ProcessTab1></ProcessTab1>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
