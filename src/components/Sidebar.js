// Sidebar.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import projectsImage from '../buttons/projectsButton.png';
import aboutImage from '../buttons/aboutButton.png';
import cvImage from '../buttons/cvButton.png';
import contactImage from '../buttons/contactButton.png';
import homeImage from '../buttons/miniHomeButton4.png';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <NavLink to="/" activeClassName="active" className={location.pathname === '/' ? 'active' : ''}>
                <img src={homeImage} alt="Home" className="sidebar-button" />
            </NavLink>
            <NavLink to="/projects" activeClassName="active" className={location.pathname === '/projects' ? 'active' : ''}>
                <img src={projectsImage} alt="Projects" className="sidebar-button" />
            </NavLink>
            <NavLink to="/about" activeClassName="active" className={location.pathname === '/about' ? 'active' : ''}>
                <img src={aboutImage} alt="About" className="sidebar-button"  />
            </NavLink>
            <NavLink to="/cv" activeClassName="active" className={location.pathname === '/cv' ? 'active' : ''}>
                <img src={cvImage} alt="CV" className="sidebar-button" />
            </NavLink>
            <NavLink to="/contact" activeClassName="active" className={location.pathname === '/contact' ? 'active' : ''}>
                <img src={contactImage} alt="Contact" className="sidebar-button" />
            </NavLink>
        </div>
    );
};

export default Sidebar;
