import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import './header.css'; 
import logo1 from '../../assets/image1.png';
import logo2 from '../../assets/image2.png';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const navigate = useNavigate();
  

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
        <img src={logo1} alt="logo" className="logo-image" 
          onClick={() => navigate("/")} 
          style={{ cursor: "pointer" }}/>
        <img src={logo2} alt="logo" className="logo-image"
        onClick={() => navigate("/")} 
        style={{ cursor: "pointer" }} />
        </Link>
      </div>
      
      <nav className="header__nav">
        <Link to="/login" className="nav-link">
          <PersonIcon style={{ marginRight: '5px' ,transform: 'translateY(5px)'}} />
          Login
        </Link>
        <Link to="/cart" className="nav-link">
          <ShoppingCartIcon style={{ marginRight: '5px'  ,transform: 'translateY(5px)' }} />
          Cart
        </Link>
      </nav>
    </header>
  );
};

export default Header;
