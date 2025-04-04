import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductList from "./components/ProductList/ProductList";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WishList from "./components/Wishlist/WishList";
import Search from "./components/Search/Search";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const addToWishlist = (item) => {
    // Check if item already exists in wishlist
    if (!wishlist.some(wishItem => wishItem.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };

  const handleRemoveItem = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  if (loading) {
    return (
      <div className="app-loader">
        <div className="loader"></div>
        <p>Loading AR Experience...</p>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Header wishlistCount={wishlist.length} />
          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <ProductList
                    addToWishlist={addToWishlist}
                    wishlist={wishlist}
                    removeFromWishlist={handleRemoveItem}
                  />
                }
              />
              <Route
                path="/wishlist"
                element={
                  <WishList wishlist={wishlist} onRemoveItem={handleRemoveItem} />
                }
              />
              <Route 
                path="/search" 
                element={
                  <Search 
                    addToWishlist={addToWishlist} 
                    removeFromWishlist={handleRemoveItem} 
                    wishlist={wishlist} 
                  />
                } 
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;