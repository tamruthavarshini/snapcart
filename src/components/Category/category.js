import React from "react";
import "./category.css";

const Category = ({ imageSrc, name }) => {
  console.log("Categories in Component:", imageSrc);

  return (
    <div className="category-card">
      <img src={imageSrc} alt={name} className="category-image" />
      <p className="category-name">{name}</p>
    </div>
  );
};

export default Category;
