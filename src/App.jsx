import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import Home from './components/Home';
import Contact from './components/Contact';
import { CartProvider } from './components/CartContext';
import Cart from './components/CartPage';
import CategoryPage from './components/CategoryPage';
import ItemDetail from './components/itemDetail';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:articleId" element={<ItemDetail/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
