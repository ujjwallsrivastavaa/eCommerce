import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import {BrowserRouter} from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>

    <App />
  </CartProvider>
  </BrowserRouter>

)
