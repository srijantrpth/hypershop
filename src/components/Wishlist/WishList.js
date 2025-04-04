import React from "react";
import "./WishList.css";
import { Link } from 'react-router-dom';

const WishList = ({wishlist, onRemoveItem}) => {
  const isEmpty = wishlist.length === 0;

  const EmptyWishlist = () => {
    return (
      <>
        <div className="alert">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>You have no items in your wishlist. Start adding some!</p>
          </div>
        </div>
        <Link to="/" className="go-back">
          Browse Products
        </Link>
      </>
    );
  };
  
  const handleRemoveItem = (id) => {
    onRemoveItem(id);
  };
  
  const FilledWishlist = () => {
    return (
      <div className="wishlist-items">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <div className="wishlist-details">
              <div className="wishlist-name">{item.name}</div>
              <div className="badge-container">
                <span className="wishlist-category">{item.category}</span>
                <span className="wishlist-color">{item.color}</span>
              </div>
            </div>
            <button 
              onClick={() => handleRemoveItem(item.id)} 
              className="remove-btn"
              aria-label={`Remove ${item.name} from wishlist`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">Your Wishlist</h2>
      <div className="wishlist-paper">
        <h3 className="wishlist-heading">Saved Items</h3>
        <hr className="divider" />
        {isEmpty ? <EmptyWishlist /> : <FilledWishlist />}
      </div>
    </div>
  );
};

export default WishList;