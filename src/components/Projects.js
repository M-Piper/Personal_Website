import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Projects = () => {
    return (
        <div className="projects-bg">
            <h1>Projects</h1>
            <Link to="/about">About</Link>
            <Link to="/cv">CV</Link>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Projects;
