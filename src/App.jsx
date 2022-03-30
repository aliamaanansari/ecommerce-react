import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
