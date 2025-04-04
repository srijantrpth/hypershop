import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ModelViewer from "../ModelViewer/ModelViewer";
import productItems from "../../data/ProductItems";
import "./Search.css";

const Search = ({ addToWishlist, removeFromWishlist, wishlist }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a search delay
    setLoading(true);
    
    const timer = setTimeout(() => {
      if (query) {
        const searchResults = productItems.filter(item => 
          item.name.toLowerCase().includes(query.toLowerCase()) || 
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.color.toLowerCase().includes(query.toLowerCase())
        );
        
        setResults(searchResults);
      } else {
        setResults([]);
      }
      
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [query]);

  if (loading) {
    return (
      <div className="search-page">
        <div className="search-title">
          <h1>Searching for "{query}"</h1>
        </div>
        <div className="search-loading">
          <div className="search-loader"></div>
          <p>Searching for AR models...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="search-page">
      <div className="search-title">
        <h1>Search Results for "{query}"</h1>
        <p>{results.length} models found</p>
      </div>
      
      {results.length > 0 ? (
        <div className="search-results">
          {results.map(item => (
            <ModelViewer 
              key={item.id}
              item={item}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
              wishlist={wishlist}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <div className="no-results-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <h2>No AR Models Found</h2>
            <p>We couldn't find any AR models matching your search for "{query}".</p>
            <p className="suggestions">Try:</p>
            <ul>
              <li>Checking for typos</li>
              <li>Using more general terms</li>
              <li>Searching by category (Furniture, Art, etc.)</li>
              <li>Searching by color</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;