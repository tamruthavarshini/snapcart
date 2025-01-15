import React from "react";
import "./productlist.css";

const ProductList = ({brand,cost,image,discount,description}) => {
  const IMAGE_GET_URL = `${process.env.REACT_APP_ECO_BASE_URL}/images`;
  const discountedPrice = (cost - (cost * discount) / 100).toFixed(0);

  return (
    <div className="product-card">
      <img
        src={`${IMAGE_GET_URL}/${image}.png`}
        alt={brand}
        className="product-image"
      />
      <p className="product-name">{brand}</p>
      <p className="product-description">{description}</p>
      <p className="product-cost">
           <span className="final-cost">₹{discountedPrice}</span>
          <span className="strike-price"> ₹{cost} </span>
          <span className="off-percentage">{discount}% off</span>
        </p>
    </div>
      );

}
export default ProductList;