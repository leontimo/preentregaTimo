import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import Home from './components/Home';
import Contact from './components/Contact';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/CartContext';
import Cart from './components/CartPage';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
