import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import mainImage from '../buttons/no_selection.png';
import projectsHoverImage from '../buttons/projects.png';
import aboutHoverImage from '../buttons/about.png';
import cvHoverImage from '../buttons/cv.png';
import contactHoverImage from '../buttons/contact.png';
import homeHoverImage from '../buttons/home.png';
import Sidebar from './Sidebar';
import monster from '../images/WynneTheUncertain.png';
import canfly from '../images/'canfly.png';

const Projects = () => {
    return (
        <div className="projects-bg">
            <Sidebar />
            <Link to="https://worriedmonsters.com" className="worriedMonsters-link">
                <div className="worriedMonsters">
                    <div className="text-container">
                        <h1>Worried</h1>
                        <h2>Monsters</h2>
                    </div>
                    <img src={monster} alt="worriedMonsters" className="worried-monsters-image" />
                </div>
            </Link>
            <Link to="https://ashy-desert-0cf93a21e.5.azurestaticapps.net/" className="worriedMonsters-link">
        <div className = "canfly">
            <div className = "text-container">
                <h3> Pilot Logbook</h3>
            </div>
            <img src={canfly} alt="canfly" className="canfly-image"
            </div>
    );
};

export default Projects;