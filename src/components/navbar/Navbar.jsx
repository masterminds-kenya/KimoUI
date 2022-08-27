import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is Kimo</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">Terms and Privacy</a></p>
          <p><a href="#blog">Contacts</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p><a href="http://localhost:3000/login">Sign in</a></p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is KiMO?</a></p>
            <p><a href="#possibility">Services</a></p>
            <p><a href="#features">Terms&&Privacy</a></p>
            <p><a href="#blog">Contacts</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p><a href="http://localhost:3000/login">sign in</a></p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
