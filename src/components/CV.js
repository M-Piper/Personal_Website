import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const CV = () => {
    return (
        <div className="cv-bg">
            <h1>CV</h1>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default CV;
