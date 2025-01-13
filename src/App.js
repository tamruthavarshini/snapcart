// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import  Footer  from './components/Footer/footer';
// import Header from './components/Header/header';
// import HomePage from './pages/HomePage/HomePage';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Header />
//       <HomePage/>
      
//      <Footer/>
//      </BrowserRouter>

//     </div>
//   );
// }

// export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import HomePage from './pages/HomePage/HomePage';
import ProductsList from './pages/ProductListPage/ProductListPage';
import Product from './pages/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:categoryName/:categoryId" element={<ProductsList />} />
          <Route path="/product/:category_id/:product_id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
