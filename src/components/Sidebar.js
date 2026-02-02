import React from 'react';
import { NavLink } from 'react-router-dom';
import projectsImage from '../buttons/projectsButton.png';
import aboutImage from '../buttons/aboutButton.png';
import cvImage from '../buttons/cvButton.png';
import contactImage from '../buttons/contactButton.png';
import homeImage from '../buttons/miniHomeButton4.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={homeImage} alt="Home" className="sidebar-button" />
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={projectsImage} alt="Projects" className="sidebar-button" />
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={aboutImage} alt="About" className="sidebar-button" />
            </NavLink>
            <NavLink to="/cv" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={cvImage} alt="CV" className="sidebar-button" />
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={contactImage} alt="Contact" className="sidebar-button" />
            </NavLink>
        </div>
    );
};

export default Sidebar;