import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import canFlyLogo from '../buttons/canfly.png';

const Projects = () => {
    useEffect(() => {
        const featureId = 'mainProjects';
        const featureElement = document.getElementById(featureId);
        if (featureElement) {
            const scrollPosition = featureElement.offsetTop + 200;
            featureElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="projects-bg">
            <div id="mainProjects">
                <Link to="#" className="large-button">
                    <img src={canFlyLogo} alt="CanFly Logo" className="project-button-image"/>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
