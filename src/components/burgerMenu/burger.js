// src/components/Burger.js
import React from 'react';
import './burger.css';

const Burger = ({ open, setOpen }) => {
    return (
      <div className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    );
  };
  
  export default Burger;
