import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import fruitImage from '../buttons/fruit.png';
const Projects = () => {
    useEffect(() => {
        const featureId = 'mainProjects'; // Replace 'experience' with the actual ID of the element you want to scroll to
        const featureElement = document.getElementById(featureId);
        if (featureElement) {
            featureElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="projects-bg">
            <h1>Projects</h1>
            <Link to="/about">About</Link>
            <Link to="/cv">CV</Link>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>

            <div id="mainProjects">
                <Link to="#" className="large-button">
                    <img src={fruitImage} alt="Fruit Button 1" className="button-image" />
                </Link>
            </div>
        </div>
    );
};

export default Projects;
