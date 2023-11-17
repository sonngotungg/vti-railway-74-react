import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./page/home";
import Login from "./page/login";
// import Layout1 from "./components/Layout/Layout1";
// import Layout2 from "./components/Layout/Layout2";
// import Layout3 from "./components/Layout/Layout3";
// import Layout4 from "./components/Layout/Layout4";
// import Layout5 from "./components/Layout/Layout5";
import ProductItem1 from "./components/ProductItem1/ProductItem1";
// import ProductItem2 from "./components/ProductItem2/ProductItem2";
// import ProductItem3 from "./components/ProductItem3/ProductItem3";
import { useEffect } from "react";
import axios from "axios";

import { login } from "./apis/accountApi";

function App() {
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
                    <Route path="/" element={<ProductItem1></ProductItem1>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
