import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Burger from "../burgerMenu/burger";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    
    const handleScroll = () => {
        setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navRef]);

  return (
    <nav className="nav" ref={navRef}>
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>DALMARKOV</strong>
          </NavLink>
          <BtnDarkMode />
          <Burger open={open} setOpen={setOpen} />
          <ul className={`nav-list ${open ? 'open' : ''}`}>
            <li className="nav-list__item">
              <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>Projects</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
