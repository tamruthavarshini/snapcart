import React ,  { useState }from "react";
import './product.css';

const ProductList = ({brand,cost,image1,image2,image3,image4,image5,discount,description,variants}) => {
  const IMAGE_GET_URL = `${process.env.REACT_APP_ECO_BASE_URL}/images`;
  const [selectedImage, setSelectedImage] = useState(image1);

  // List of all images
  const allImages = [image1, image2, image3, image4, image5].filter(Boolean);
  const discountedPrice = (cost - (cost * discount) / 100).toFixed(0);
  const variantList = variants ? variants.split(",") : [];

  return (
    <div className="product">
     
      <div className="product-thumbnails">
        {allImages.map((img, index) => (
          <img
            key={index}
            src={`${IMAGE_GET_URL}/${img}.png`}
            alt={brand}
            className={`thumbnail-image ${
              img === selectedImage ? "selected-thumbnail" : ""
            }`}
            onClick={() => setSelectedImage(img)} // Update selected image on click
          />
        ))}
      </div>

      {/* Selected Image Display */}
      <div className="product-image-selected">
        <img
          src={`${IMAGE_GET_URL}/${selectedImage}.png`}
          alt={brand}
          className="selected-image"
        />
      </div>
       {/* Product Details Section */}
       <div className="product-details">
        <h2 className="product-brand">{brand}</h2>
        <p className="product-description">{description}</p>
        <hr className="divider" />
        <p className="product-cost">
          Price: <span className="final-cost">₹{discountedPrice}</span>
          <span className="strike-price"> ₹{cost} </span>
          <span className="off-percentage">({discount}% off)</span>
        </p>
        <p className="tax-included">Inclusive of all taxes</p>

        {variantList.length > 0 && (
          <div className="product-variants">
            <h3>Select Size:</h3>
            <div className="variant-circles">
              {variantList.map((variant, index) => (
                <div key={index} className="variant-circle">
                  {variant.trim()}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductList;