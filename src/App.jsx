import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import ProductItems from "./pages/ProductItems";
import Cart from "./pages/Cart";
import Forget from "./pages/Forget";
import Login from "./pages/LoginPage";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/product-list" element={<ProductItems />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forget />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
