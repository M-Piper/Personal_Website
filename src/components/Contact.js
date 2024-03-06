import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Contact = () => {
    return (
        <div className="contact-bg">
            <h1>Contact</h1>
            <Link to="/about">About</Link>
            <Link to="/cv">CV</Link>
            <Link to="/Home">Home</Link>
            <Link to="/projects">Projects</Link>
        </div>
    );
};

export default Contact;
