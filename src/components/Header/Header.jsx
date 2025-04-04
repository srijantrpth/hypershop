import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Header.css";

const Header = ({ wishlistCount = 0 }) => {
  const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "Wishlist", path: "/wishlist", badge: wishlistCount },
  ];
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Close menu when location changes
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (menuOpen) setMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setSearchOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          HyperHawks
        </Link>
        
        <div className="header-right">
          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              {navigationLinks.map((item, index) => (
                <li key={index} className={location.pathname === item.path ? 'active' : ''}>
                  <Link to={item.path}>
                    {item.label}
                    {item.badge > 0 && <span className="badge">{item.badge}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="search-container">
            <button 
              className="search-toggle" 
              onClick={toggleSearch}
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            
            {searchOpen && (
              <form className="search-form" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search AR models..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <button type="submit" aria-label="Submit search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </form>
            )}
          </div>
          
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;