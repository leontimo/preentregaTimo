import React from "react";
import "../styles/navbar.scss";
import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.pictureUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <span>${item.price}</span>

      <NavLink to={`/detail/${item.id}`}>
        <button>Detalles del producto</button>
      </NavLink>
    </div>
  );
};

export default Item;
