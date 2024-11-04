import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import useSWR from 'swr';
import { useCart } from './context/CartContext';

const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
});

function App() {
  const { data: products, error } = useSWR('https://fakestoreapi.com/products', fetcher);
  const { setProducts } = useCart();

  useEffect(() => {
    if (products) {
      setProducts(products); 
    }
  }, [products, setProducts]);

  if (error) return <div>Error loading products.</div>;
  if (!products) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
