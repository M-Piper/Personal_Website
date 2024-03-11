import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const About = () => {
    useEffect(() => {
        const featureId = 'aboutMargaret';
        const featureElement = document.getElementById(featureId);
        if (featureElement) {
            const scrollPosition = featureElement.offsetTop + 200;
            featureElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="about-bg">
            <div className="menu-links">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/cv">CV</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="about-content">
                <div id="aboutMargaret">
                    <p>While new to working as a developer, Margaret is no stranger to the Canadian workforce. From her diverse background as a professional musician, librarian, archivist, and now IT professional, her creativity shines through all of her work experiences and she is known for her strong work ethic, creativity, and ability to learn on the fly.

                        Margaret enjoyed a lengthy career in the field of librarianship and found herself in increasingly technical roles, culminating in a Systems Librarian position. At that point, she decided to make the leap and return to school to learn coding and become a full-stack developer. She was fortunate to be able to work full time for the Federal Government of Canada in an IT capacity during her studies.

                        In her spare time, Margaret enjoys sewing, cooking and gardening. She lives in the countryside between Ottawa and Montreal with her husband and three cats.
                        [draft]
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
