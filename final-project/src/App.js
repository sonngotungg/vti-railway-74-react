import {
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import { ProtectedRoute } from "./pages/ProtectedRoute";

import './App.css'

export default function App() {
  const { user } = useSelector(state => state.account)

  const userInfo = JSON.parse(localStorage.getItem('user'))
  const isCustomer = userInfo?.role === 'CUSTOMER'

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute
            isAllowed={isCustomer}
          >
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route path='/' element={<Home />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
}
