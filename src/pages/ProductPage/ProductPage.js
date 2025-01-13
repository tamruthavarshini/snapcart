// import React, { useEffect } from "react";
// import { useNavigate, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import './ProductPage.css';
// import { getProductDetails } from "../../redux/slices/productsSlice"; // Fixed typo here
// import Product from '../../components/Product/product';

// const ProductPage = () => {
//   const dispatch = useDispatch();
//   const { category_id, product_id } = useParams();

//   const { data: product, loading, error } = useSelector((state) => state.products);
  

//   useEffect(() => {
//     dispatch(getProductDetails({ categoryId: category_id, product_id }));  // Fixed typo here
//   }, [dispatch, category_id, product_id]);

//   if (loading) return <p>Loading product...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!product || product.length === 0) return <p>No products available</p>;
//   console.log("product"+product.image1);
//   return (
//     <main>
//       <div className="product-wrapper">
//         <Product
//           key={product.product_id}
//           brand={product.brand}
//           cost={product.cost}
//           image1={product.image1}
//           image2={product.image2}
//           image3={product.image3}
//           image4={product.image4}
//           image5={product.image5}
//           description={product.description}
//           discount={product.discount}
//           variants={product.variants}
//         />
//       </div>
//     </main>
//   );
// };

// export default ProductPage;
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import './ProductPage.css';
import { getProductDetails } from "../../redux/slices/productsSlice";
import Product from '../../components/Product/product';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { category_id, product_id } = useParams();

  // Access the product data, loading state, and error from the Redux store
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // Dispatch the action to fetch the product details
    dispatch(getProductDetails({ categoryId: category_id, product_id }));
  }, [dispatch, category_id, product_id]);

  // Handle loading and error states
  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;

  // Extract product details directly from the response
  const product = data;

  // If no product is found, show a message
  if (!product) return <p>No product found</p>;

  console.log("Product data:", product); // Debug the product data

  // Render the Product details
  return (
    <main>
      <div className="product-wrapper">
        <Product
          key={product.product_id}
          brand={product.brand}
          cost={product.cost}
          image1={product.image1}
          image2={product.image2}
          image3={product.image3}
          image4={product.image4}
          image5={product.image5}
          description={product.description}
          discount={product.discount}
          variants={product.variants}
        />
      </div>
    </main>
  );
};

export default ProductPage;
