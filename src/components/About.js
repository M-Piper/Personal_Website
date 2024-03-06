import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const About = () => {
    return (
        <div className="about-bg">
            <h1>About</h1>
            <Link to="/projects">Projects</Link>
            <Link to="/cv">CV</Link>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default About;
