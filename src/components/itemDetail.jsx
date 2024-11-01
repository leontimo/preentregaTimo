import React, { useState } from "react";
import { useCart } from "./CartContext";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    if (quantity < product.rating.count) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Added ${quantity} ${product.title} to cart`);
  };

  return (
    <div>
      <img src={product.pictureUrl} alt={product.title} style={{ width: 300 }} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Precio: ${product.price}</h3>
        <h4>En stock: {product.rating.count}</h4>
        
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={handleDecrement} disabled={quantity <= 1}>-</button>
          <span style={{ margin: '0 10px' }}>{quantity}</span>
          <button onClick={handleIncrement} disabled={quantity >= product.rating.count}>+</button>
        </div>

        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;