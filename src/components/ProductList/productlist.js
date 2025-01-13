import React from "react";
import "./productlist.css";

const ProductList = ({brand,cost,image,discount,description}) => {
  const IMAGE_GET_URL = `${process.env.REACT_APP_ECO_BASE_URL}/images`;

  return (
    <div className="product-card">
      <img
        src={`${IMAGE_GET_URL}/${image}.png`}
        alt={brand}
        className="product-image"
      />
      <p className="product-name">{brand}</p>
      <p className="product-description">{description}</p>
    </div>
      );

}
export default ProductList;