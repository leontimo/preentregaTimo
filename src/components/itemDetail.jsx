import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const { articleId } = useParams();
  const notify = () => toast("Producto agregado al carrito");
  const handleIncrement = () => {
    if (quantity < article.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(article, quantity);
    notify();
  };
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "products", articleId); // Cambia 'nombre_de_tu_coleccion' por el nombre de tu colección
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() }); // Guarda el documento en el estado
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.error("Error fetching document: ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, []); // Dependencia para volver a ejecutar si cambia el ID

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {article ? (
        <div>
          <img
            src={article.pictureUrl}
            alt={article.title}
            style={{ width: 300 }}
          />
          <h1>{article.title}</h1>
          <span>{article.description}</span>

          <div style={{ marginTop: "20px" }}>
            <h3>Precio: ${article.price}</h3>
            <h4>En stock: {article.stock}</h4>

            <div style={{ display: "flex", alignItems: "center" }}>
              <button onClick={handleDecrement} disabled={quantity <= 1}>
                -
              </button>
              <span style={{ margin: "0 10px" }}>{quantity}</span>
              <button
                onClick={handleIncrement}
                disabled={quantity >= article.stock}
              >
                +
              </button>
            </div>

            <button onClick={handleAddToCart}>Agregar al carrito</button>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <p>Cargando</p>
      )}
      {/* <div>
      <img
        src={article.pictureUrl}
        alt={article.title}
        style={{ width: 300 }}
      />
      <h1>{article.title}</h1>
      <span>{article.description}</span>

      <div style={{ marginTop: "20px" }}>
        <h3>Precio: ${article.price}</h3>
        <h4>En stock: {article.rating.count}</h4>

        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={handleDecrement} disabled={quantity <= 1}>
            -
          </button>
          <span style={{ margin: "0 10px" }}>{quantity}</span>
          <button
            onClick={handleIncrement}
            disabled={quantity >= article.rating.count}
          >
            +
          </button>
        </div>

        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
      <ToastContainer />
    </div> */}
    </>
  );
};

export default ItemDetail;
