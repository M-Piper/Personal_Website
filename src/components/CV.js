import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const CV = () => {
    useEffect(() => {
        const featureId = 'experience'; // Replace 'experience' with the actual ID of the element you want to scroll to
        const featureElement = document.getElementById(featureId);
        if (featureElement) {
            featureElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="cv-bg">
            <h1>CV</h1>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>

            {/* Placeholder text for the body of your CV */}
            <div id="experience">
                <h2>Experience</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut velit eu metus finibus ultrices.
                    Praesent vehicula lacus vel justo molestie, sed semper velit hendrerit. Proin suscipit enim at mi dapibus,
                    in sodales est ultricies. Vivamus sagittis sapien ut ex gravida, sit amet consectetur dui gravida.
                    Sed commodo tellus a purus malesuada, at viverra libero pulvinar. Integer a risus ac libero egestas
                    sollicitudin. Nunc consectetur lacinia enim, in lacinia leo suscipit eu. Nam vitae ante eu felis
                    consequat tincidunt sit amet eu elit. Nulla facilisi. Nam efficitur risus at urna placerat gravida.
                    Donec semper vehicula sapien vitae consequat.
                </p>
                {/* Add more sections as needed */}
            </div>
        </div>
    );
};

export default CV;
