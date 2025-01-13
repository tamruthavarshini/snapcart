import React, { useEffect} from "react";
import { useNavigate ,useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import './ProductListPage.css';
import ProductList from '../../components/ProductList/productlist';
import { getProducts } from "../../redux/slices/productsSlice";

const ProductsList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categoryName, categoryId } = useParams(); 
    
      const handleCategoryClick = (category_id,product_id) => {
        navigate(`/product/${category_id}/${product_id}`);
      };

    const { data: products, loading, error } = useSelector(
        (state) => {
            console.log("Redux State:", state.products);
            return state.products;
          }
      );
      
    
      
      // useEffect(() => {
      //   dispatch(getProducts());
      // }, [dispatch]);
      useEffect(() => {
        if (categoryId) {
          dispatch(getProducts(categoryId));
        }
      }, [categoryId, dispatch]);
        if (loading) return <p>Loading products...</p>;
        if (error) return <p>Error: {error}</p>;
        if (!Array.isArray(products) || products.length === 0) {
          return <p>No products available</p>;
        }

    return (
        <main>
        <div className="products-wrapper">
        {products.map((product) => (
          <div onClick={() => handleCategoryClick(product.category_id,product.product_id)} className="productlist">
            <ProductList
            key={product.product_id}{...product} 
            brand={product.brand}
            cost={product.cost}
            image={product.image1}
            description={product.description}
            discount={product.discount}

          />
          </div>
        ))}
      </div>
    </main>
    );
  };
  
  export default ProductsList;