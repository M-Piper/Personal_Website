import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import mainImage from '../buttons/main.png';
import mainHoverImage from '../buttons/mainHover.png';
import projectsHoverImage from '../buttons/projects.png';
import aboutHoverImage from '../buttons/about.png';
import cvHoverImage from '../buttons/cv.png';
import contactHoverImage from '../buttons/contact.png';
import projectsImage from '../buttons/projectsButton.png';
import contactImage from '../buttons/contactButton.png';
import cvImage from '../buttons/cvButton.png';
import aboutImage from '../buttons/aboutButton.png';
import PiperButton from './PiperButton';
import Button from './Button';
import { projectPoly, aboutPoly, contactPoly, cvPoly, homePoly } from './PolygonCoordinates';
import '../App.css';

const Home = () => {
    const [hoverImage, setHoverImage] = useState(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            setHoverImage(null); // Reset hoverImage state when component unmounts
        };
    }, []);

    const handleButtonClick = () => {
        console.log('Clicked! Hover Image:', hoverImage); // Add this line
        // Determine the appropriate URL based on the current hover state
        let destination;
        if (hoverImage === projectsHoverImage) {
            navigate('/projects');
        } else if (hoverImage === aboutHoverImage) {
            navigate('/about');
        } else if (hoverImage === cvHoverImage) {
            navigate('/cv');
        } else if (hoverImage === contactHoverImage) {
            navigate('/contact');
        } else if (hoverImage === mainHoverImage) {
            navigate('/');
        } else {
            navigate('/');
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
        if (hoverImage === projectsHoverImage) {
            setHoverImage(projectsImage);
        } else {
            setHoverImage(mainHoverImage);
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setHoverImage(null);
    };

    const handleMouseMove = (event) => {
        if (isInteracting) {
            const { clientX, clientY } = event;
            setMouseCoordinates({ x: clientX, y: clientY });
        }
    };

    const handleMouseDown = (event) => {
        event.preventDefault(); // Prevent default browser behavior
        setIsInteracting(true);
        const { clientX, clientY } = event;
        setMouseCoordinates({ x: clientX, y: clientY });
    };

    const handleMouseUp = () => {
        setIsInteracting(false);
    };

    const handleTouchStart = (event) => {
        setIsInteracting(true);
        const { clientX, clientY } = event.touches[0];
        setMouseCoordinates({ x: clientX, y: clientY });
    };

    const handleTouchEnd = () => {
        setIsInteracting(false);
    };

    return (
        <div className="home-bg" onMouseMove={handleMouseMove}>
            <h1 className="header">Margaret Piper</h1>

            <div className="button-container">
                <Button image={projectsImage} destination="/projects" />
                <Button image={aboutImage} destination="/about" />
                <Button image={cvImage} destination="/cv" />
                <Button image={contactImage} destination="/contact" />
            </div>

            <div
                className="main-image-button"
                onClick={handleButtonClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ position: 'relative' }} // Allow positioning of the line
            >
                <img
                    src={isHovering && hoverImage ? hoverImage : mainImage}
                    alt="Main"
                    className="main-image"
                    style={{ pointerEvents: 'none' }} // Prevent mouse events on the image itself
                />
                {isInteracting && (
                    <svg className="line" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        <line x1={mouseCoordinates.x} y1={mouseCoordinates.y} x2="20%" y2="50%" stroke="black" strokeDasharray="5" strokeWidth="4" />
                    </svg>
                )}
            </div>
        </div>
    );
};

export default Home;
