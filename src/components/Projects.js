import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import canFlyLogo from '../buttons/canfly.png';

const Projects = () => {
    useEffect(() => {
        const featureId = 'mainProjects'; // Replace 'experience' with the actual ID of the element you want to scroll to
        const featureElement = document.getElementById(featureId);
        if (featureElement) {
            const scrollPosition = featureElement.offsetTop + 200;
            featureElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="projects-bg">
            <div className="menu-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/cv">CV</Link>
            <Link to="/contact">Contact</Link>
            </div>
            <div id="mainProjects">
                <Link to="#" className="large-button">
                    <img src={canFlyLogo} alt="CanFly Logo" className="button-image" />
                </Link>
            </div>
        </div>
    );
};

export default Projects;
