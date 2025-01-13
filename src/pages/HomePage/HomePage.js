import React, { useEffect,useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../redux/slices/categorySlice";
import Slider from "../../components/Slider/headerSlider";
import Category from "../../components/Category/category";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState(null);
  const handleCategoryClick = (categoryName,categoryId) => {
    setCategoryId(categoryId);
    navigate(`/products/${categoryName}/${categoryId}`);
  };

  // Extract data from Redux state
  const { data: categories, loading, error } = useSelector(
    (state) => state.categories
  );
  
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  // Render loading, error, or fallback messages
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!categories || categories.length === 0)
    return <p>No categories available</p>;

  return (
    <main>
  <div className="slider-wrapper">
    <Slider />
  </div>
  <div className="categories-wrapper">
    {categories.map((category) => (
      <div 
        key={category.id}
        onClick={() => handleCategoryClick(category.name, category.id)}
        className="category-item"
      >
        <Category
          imageSrc={category.image}
          name={category.name}
        />
      </div>
    ))}
  </div>
</main>
  );
};

export default HomePage;
