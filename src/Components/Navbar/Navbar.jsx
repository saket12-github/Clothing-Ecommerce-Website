import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const location = useLocation();
  const { getTotalCartItems } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const getActiveMenu = () => {
    const path = location.pathname;
    if (path === '/') return 'shop';
    if (path === '/mens') return 'mens';
    if (path === '/womens') return 'womens';
    if (path === '/kids') return 'kids';
    return '';
  };

  const activeMenu = getActiveMenu();
  const cartCount = getTotalCartItems();

  return (
    <nav className='navbar'>
      <Link to='/' className="nav-logo">
        <img src={logo} alt="BuyMore logo" />
        <p>BUY MORE</p>
      </Link>

      <ul className={`nav-menu${menuOpen ? ' nav-menu-open' : ''}`}>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/'>Shop</Link>
          {activeMenu === 'shop' && <hr />}
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/mens'>Men</Link>
          {activeMenu === 'mens' && <hr />}
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/womens'>Women</Link>
          {activeMenu === 'womens' && <hr />}
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/kids'>Kids</Link>
          {activeMenu === 'kids' && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login' onClick={() => setMenuOpen(false)}>
          <button>Login</button>
        </Link>
        <Link to='/cart' className="nav-cart-link" onClick={() => setMenuOpen(false)}>
          <img src={cart_icon} alt="Cart" />
          {cartCount > 0 && <div className="nav-cart-count">{cartCount}</div>}
        </Link>
      </div>

      <button
        className={`nav-hamburger${menuOpen ? ' nav-hamburger-open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};
