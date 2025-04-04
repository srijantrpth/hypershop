import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-component">
      <div className="help-content">
        <h3 className="help-title">How to Interact with 3D Models</h3>
        
        <div className="help-section">
          <h4>ORBIT NAVIGATION</h4>
          
          <div className="help-instruction">
            <div className="help-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5c-1.374 0-2.5 1.126-2.5 2.5S10.626 12 12 12s2.5-1.126 2.5-2.5S13.374 7 12 7z" fill="currentColor"/></svg>
            </div>
            <div>
              <p className="help-text"><strong>Move camera:</strong> 1-finger drag or Left Mouse Button</p>
            </div>
          </div>
          
          <div className="help-instruction">
            <div className="help-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M8 12.052c1.995 0 3.5-1.505 3.5-3.5s-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5 1.505 3.5 3.5 3.5zM9 13H7c-2.757 0-5 2.243-5 5v2h12v-2c0-2.757-2.243-5-5-5zm9.31-7.5l-5.34 5.34 1.59 1.59-1.91 1.91-3.33-3.33 1.91-1.91 1.59 1.59 5.34-5.34-.85-.85.7-.7 2.26 2.26-.7.7-.26-.26z" fill="currentColor"/></svg>
            </div>
            <div>
              <p className="help-text"><strong>Pan:</strong> 2-finger drag or Right Mouse Button or SHIFT + Left Mouse Button</p>
            </div>
          </div>
          
          <div className="help-instruction">
            <div className="help-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z" fill="currentColor"/></svg>
            </div>
            <div>
              <p className="help-text"><strong>Zoom on object:</strong> Double-tap or Double-click on object</p>
            </div>
          </div>
          
          <div className="help-instruction">
            <div className="help-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 12h-2v4h2v-4zm-1-8c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" fill="currentColor"/></svg>
            </div>
            <div>
              <p className="help-text"><strong>Zoom out:</strong> Double-tap or Double-click on background</p>
            </div>
          </div>
          
          <div className="help-instruction">
            <div className="help-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"/></svg>
            </div>
            <div>
              <p className="help-text"><strong>Zoom:</strong> Pinch in/out or Mousewheel or CTRL + Left Mouse Button</p>
            </div>
          </div>
        </div>
        
        <div className="help-section">
          <h4>AR CONTROLS</h4>
          
          <div className="help-instruction">
            <div className="help-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z" fill="currentColor"/></svg>
            </div>
            <div>
              <p className="help-text"><strong>Enter AR:</strong> Tap "View in your space" button</p>
            </div>
          </div>
          
          <div className="help-instruction">
            <div className="help-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" fill="currentColor"/></svg>
            </div>
            <div>
              <p className="help-text"><strong>Place model:</strong> Tap on a surface in AR view</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
