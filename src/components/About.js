import React, { useEffect } from 'react';
import '../App.css';

const About = () => {
    useEffect(() => {
        const featureId = 'aboutMargaret';
        const featureElement = document.getElementById(featureId);
        if (featureElement) {
            featureElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <div className="about-bg">
            <div className="about-content">
                <div id="aboutMargaret">
                    <p>While new to working as a developer, Margaret is no stranger to the Canadian workforce. From her diverse background as a professional musician, librarian, archivist, and now IT professional, her creativity shines through all of her work experiences. She is known for her strong work ethic, creativity, and ability to learn on the fly.
                    </p>
                    <p>
                        Margaret enjoyed a lengthy career in the field of librarianship and found herself in increasingly technical roles, culminating in a Systems Librarian position. At that point, she decided to make the leap and return to school to learn coding and become a full-stack developer. She was fortunate to be able to work full-time for the Federal Government of Canada in an IT capacity during her studies. And has chosen to pursue work in the private sector.

                        In her spare time, Margaret enjoys sewing, cooking and gardening. She lives in the countryside between Ottawa and Montreal with her husband and three cats.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
