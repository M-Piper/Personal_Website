import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Contact = () => {
    useEffect(() => {
        const featureId = 'contactInfo';
        const featureElement = document.getElementById(featureId);
        if (featureElement) {
            const scrollPosition = featureElement.offsetTop + 500;
            featureElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="contact-bg">
            <div className="menu-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/cv">CV</Link>
            <Link to="/contact">Contact</Link>
            </div>
            <div id="contactInfo">
                <a href={"margaret.f.piper@gmail.com"}>margaret.f.piper@gmail.com</a>
            </div>
            <div id="contactInfo">
                <a href={"https://www.linkedin.com/in/margaretpiper/"}>LinkedIn</a>
            </div>
        </div>
    );
};

export default Contact;
