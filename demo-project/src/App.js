
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  Navigate,
  Outlet
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { Layout } from "./pages/Layout";
import { Cart } from "./pages/cart/Cart";
import { ProtectedRoute } from "./pages/ProtectedRoute";

export default function App() {
  const {user} = useSelector(state => state.account)
  
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route
            path="/cart"
            element={
              <ProtectedRoute
                isAllowed={user?.role === 'CUSTOMER'}
              >
                <Cart />
              </ProtectedRoute>
            }
          />
      </Route>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
}
