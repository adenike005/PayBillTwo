import React, { useState, useEffect, useRef } from "react";
import Logo from "/Logo.png";
import "../Styled/Header.css";
import { List } from '@phosphor-icons/react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  const handleBackgroundClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <div 
        className={`navigation ${menuOpen ? 'active_menu' : ''}`} 
        ref={menuRef}
      >
        <ul className="menu" onClick={(e) => e.stopPropagation()}>
          <li>
            <a href="#" onClick={handleNavLinkClick}>Product</a>
          </li>
          <li>
            <a href="#" onClick={handleNavLinkClick}>About</a>
          </li>
          <li>
            <a href="#" onClick={handleNavLinkClick}>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="mobile_menu">
        <List size={18} color="#fff" onClick={menuToggle} />
      </div>

      {/* Ensure the fixed-background is rendered when the menu is open */}
      {menuOpen && <div className="fixed-background" onClick={handleBackgroundClick}></div>}
    </div>



  );
}

export default Header;


