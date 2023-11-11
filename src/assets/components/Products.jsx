import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import SingleProduct from "./singleProduct";

const Products = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [products, setProduct] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState(null);

  const handleButtonClick = (index, category) => {
    setActiveButton(index);

    const filteredArray = products.filter((product) => {
      return category === "All" || product.category === category.toLowerCase();
    });

    setFilteredProduct(filteredArray);
  };

  const getProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setFilteredProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <section className="categories">
        {[
          "All",
          "Men's clothing",
          "Jewelery",
          "Electronics",
          "Women's clothing",
        ].map((label, index) => (
          <button
            key={index}
            className={index === activeButton ? "isActive" : ""}
            onClick={() => handleButtonClick(index, label)}
          >
            {label}
          </button>
        ))}
      </section>
      <section className="vitrine">
        {filteredProduct === null ? (
          <p>Loading</p>
        ) : (
          filteredProduct.map((product) => {
            return (
              <div key={product.id} class="card">
                <div class="card__image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div class="card__content">
                  <p class="card__title">{product.title}</p>
                  <p class="card__text">${product.price}</p>
                  <Link
                    to={`/products/${product.id}`}
                    class="card__button"
                    state={{ product }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </section>
    </>
  );
};

export default Products;
