import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Gaming Assets</div>
        <button>Home</button>
        <button>Categories</button>
        <button>Contact Us</button>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Navbar;