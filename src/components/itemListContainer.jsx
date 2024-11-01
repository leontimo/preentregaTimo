import React, { useEffect, useState } from "react";
import { db } from "../firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import Item from "./Item";
import "../styles/navbar.scss";

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //funcion para traernos la API de productos
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,      // Aquí obtienes el ID del documento
          ...doc.data()    // Aquí obtienes los datos del documento
      }));
        setProducts(data);
        if (category) {
          //filtar los productos segun su categoria
          const filteredProducts = data.filter(
            (product) => product.category === category
          );
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    /* const fetchProducts = () => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (category) {
            //filtar los productos segun su categoria
            const filteredProducts = data.filter(product => product.category === category);
            setProducts(filteredProducts);
          } else {
            setProducts(data);
          }
          setLoading(false)
        })
        .catch((error) => {
          .error("Error fetching products:", error);
          setLoading(false);
        });
    }; */

    //llama a la funcion oara obtebner los products
    fetchData();
  }, [category]);

  return (
    <div className="item-list-container">
      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length > 0 ? (
        <div className="item-grid">
          {products.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
