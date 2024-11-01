import React from 'react'
import '../styles/navbar.scss'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import { useCart } from './CartContext'

const NavBar = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const categories = ["women's clothing", "electronics", "jewelery", "men's clothing"];

  return (
    <nav>
      <ul>
        <li><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/home">Home</NavLink></li>
        {categories.map(category => (
          <li key={category}>
            <NavLink
              className={({ isActive }) => isActive ? "active" : ""}
              to={`/category/${category}`}
            >
              {category}
            </NavLink>
          </li>
        ))}
        <li><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/contact">Contact</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/about">About</NavLink></li>
        <li>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/cart">
            <CartWidget itemCount={cartItemCount} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar