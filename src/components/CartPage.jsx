import React, {useState} from 'react';
import { useCart } from './CartContext';
import Checkout from './checkout';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  if(isCheckingOut){
    //renderizar el componente si se a hecho click en el boton
    return <Checkout />
  }

  if (cartItems.length === 0) {
    return <div>No tenes productos en el carrito</div>;
  }

  const handleCheckout = () => {
    setIsCheckingOut(true); 
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${getCartTotal()}</h3>
      <button onClick={clearCart}>limpiar carrito</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;