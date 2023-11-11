import React from "react";
import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const SingleProduct = () => {
  const location = useLocation();
  const { product } = location.state || {};
  return (
    <article className="singleProduct">
      <section className="imageContainer">
        <img src={product.image} alt={product.title} />
      </section>
      <section className="descriptionProduct">
        <h3>{product.title}</h3>
        <div className="rating">
          <div className="stars">
            <StarIcon />
            <p>{product.rating.rate}</p>
          </div>
          <p>{product.rating.count} Reviews</p>
        </div>
        <div className="description">Description : {product.description}</div>
      </section>
    </article>
  );
};

export default SingleProduct;
