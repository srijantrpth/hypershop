import React, { useRef, useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import QRCode from "qrcode.react";
import Help from "./Help";
import "./ModelViewer.css";

const ModelViewer = ({ item, addToWishlist, removeFromWishlist, wishlist }) => {
  const [selectedVariant, setSelectedVariant] = useState('default');
  const [display, setDisplay] = useState(false);
  const [ARSupported, setARSupported] = useState(false);
  const [annotate, setAnnotate] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  
  let modelViewer1 = {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    borderRadius: "18px 18px 0 0",
  };
  
  // Accessing product for full screen
  const model = useRef();
  const varient = useRef(null);

  function toggle() {
    if (!document.fullscreenElement) {
      model.current.requestFullscreen();
    } else if (document.exitFullscreen) document.exitFullscreen();
  }

  const handleAnnotateClick = (annotation) => {
    const { orbit, target, position } = annotation;
    model.current.cameraTarget = position;
    model.current.orbit = target
  }

  useEffect(() => {
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setARSupported(true);
    }
  }, []);

  useEffect(() => {
    // set up event listeners
    const modelViewer = model.current
    modelViewer &&
    modelViewer.addEventListener('load', () => {
      const availableVariants = modelViewer?.availableVariants;
      for (const variant of availableVariants || []) {
        const option = document.createElement('option');
        option.value = variant;
        option.textContent = variant;
        varient?.current?.appendChild(option);
      }

      // Adding a default option
      if (availableVariants?.length) {
        const defaultOption = document.createElement('option');
        defaultOption.value = 'Default';
        defaultOption.textContent = 'Default';
        varient?.current?.appendChild(defaultOption);
      }
    });

    varient?.current?.addEventListener('input', (event) => {
      modelViewer.variantName = event.target.value === 'Default' ? null : event.target.value;
    });
  }, []);
   
  useEffect(() => {
    if(wishlist){
      const isInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);
      setIsInWishlist(isInWishlist);
    }
  }, [item, wishlist]);
  
  const handleAddToWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(item.id);
    } 
    else {
      addToWishlist(item);
    }
  };

  // Calculate rating display with filled and empty stars
  const renderStars = (rating = 3) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className={index < rating ? "star" : "star"} style={{ color: index < rating ? '#ffb52e' : '#d1d1d1' }}>
        ★
      </span>
    ));
  };

  // Format price with commas for thousands
  const formatPrice = (price = 1000) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="model-view">
      <div className="model-viewer-container">
        <model-viewer
          key={item.id}
          ref={model}
          style={modelViewer1}
          src={item.modelSrc}
          ios-src={item.iOSSrc}
          alt={`3D model of ${item.name}`}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate
          shadow-intensity="1"
        >
          {ARSupported && (
            <button slot="ar-button" className="arbutton">
              View in your space
            </button>
          )}

          <div className="model-controls">
            <button className="control-btn fullscreen-btn" onClick={toggle} aria-label="Full screen">
              <span className="tooltip">Full screen</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 18h-6v-2h4v-4h2v6zM4 21v-4H2v-2H8v6H4z" fill="currentColor"/></svg>
            </button>

            <button className="control-btn help-btn" onClick={() => setDisplay(!display)} aria-label="Help">
              <span className="tooltip">Help</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.5 3.5 0 1 1 13 13.355z" fill="currentColor"/></svg>
            </button>
            
            <button className="control-btn annotate-btn" onClick={() => setAnnotate(!annotate)} aria-label="Information">
              <span className="tooltip">Information</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" fill="currentColor"/></svg>
            </button>
          </div>

          {display && (
            <div className="help-overlay">
              <button className="close-btn" onClick={() => setDisplay(false)}>
                &#10006;
              </button>
              <Help />
            </div>
          )}

          {annotate && item.annotations.map((annotate, idx) => (
            <button
              key={idx}
              className="hotspot"
              slot={annotate.slot}
              data-position={annotate.position}
              data-normal={annotate.normal}
              data-orbit={annotate.orbit}
              data-target={annotate.target}
              data-visibility-attribute="visible"
              onClick={() => handleAnnotateClick(annotate)}
            >
              <div className="hotspot-annotation">{annotate.title}</div>
            </button>
          ))}
          
          {varient?.current?.children.length > 0 && (
            <div className="controls variant-selector">
              <select ref={varient} id="variant" aria-label="Select variant"></select>
            </div>
          )}
        </model-viewer>
      </div>

      <LazyLoad>
        <div className="product-details">
          <div className="product-info">
            <div className="pname">{item.name}</div>
            
            <div className="badges">
              <span className="category-badge">{item.category}</span>
              <span className="color-badge">{item.color}</span>
            </div>
            
            <div className="product-meta">
              <div className="rating-sec">
                {renderStars(4)} {/* Updated rating to 4 stars */}
              </div>
              <div className="price">{formatPrice(item.price || 1000)}</div>
            </div>
            
            {!ARSupported && (
              <div className="qr-container">
                <QRCode
                  id={item.name}
                  value={window.location.href}
                  size={80}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                  includeMargin={false}
                />
                <span className="qr-text">Scan QR code to view this product in AR on your mobile device</span>
              </div>
            )}
          </div>
          
          <button 
            className="add-icon" 
            onClick={handleAddToWishlist}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isInWishlist ? '−' : '+'}
          </button>
        </div>
      </LazyLoad>
    </div>
  );
};

export default ModelViewer;
