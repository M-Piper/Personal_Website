import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import mainImage from '../buttons/main.png';
import mainHover from '../buttons/mainHover.png';
import main1Image from '../buttons/main1.png';
import main2Image from '../buttons/main2.png';
import main3Image from '../buttons/main3.png';
import main4Image from '../buttons/main4.png';
import projectsImage from '../buttons/projectsButton.png';
import aboutImage from '../buttons/aboutButton.png';
import cvImage from '../buttons/cvButton.png';
import contactImage from '../buttons/contactButton.png';
import Button from './Button';

const Home = () => {
    const [hoverImage, setHoverImage] = useState(mainImage);
    const [showDottedLine, setShowDottedLine] = useState(false);
    const [lineCoordinates, setLineCoordinates] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
    const navigate = useNavigate();

    const handleButtonClick = (destination) => {
        navigate(destination);
    };

    const handleMainImageHover = () => {
        setHoverImage(mainHover);
    };

    const handleMainImageLeave = () => {
        setHoverImage(mainImage);
    };

    const handleMouseEnter = (image) => {
        if (image === projectsImage) {
            setHoverImage(main1Image);
        } else if (image === aboutImage) {
            setHoverImage(main2Image);
        } else if (image === cvImage) {
            setHoverImage(main3Image);
        } else if (image === contactImage) {
            setHoverImage(main4Image);
        }
    };

    const handleMouseLeave = () => {
        setHoverImage(mainImage);
    };

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        const mainImage = document.querySelector('.main-image');
        const rect = mainImage.getBoundingClientRect();
        const x = touch.clientX - rect.left; // X coordinate relative to the image
        const y = touch.clientY - rect.top; // Y coordinate relative to the image
        setLineCoordinates({ x1: rect.width / 2, y1: rect.height / 2, x2: x, y2: y });
        setShowDottedLine(true);
    };

    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        const mainImage = document.querySelector('.main-image');
        const rect = mainImage.getBoundingClientRect();
        const x = touch.clientX - rect.left; // X coordinate relative to the image
        const y = touch.clientY - rect.top; // Y coordinate relative to the image
        setLineCoordinates({ x1: rect.width / 2, y1: rect.height / 2, x2: x, y2: y });
    };

    const handleTouchEnd = () => {
        setShowDottedLine(false);
    };

    return (
        <div className="home-bg">
            <h1 className="header">Margaret Piper</h1>

            <div className="button-container">
                <Button
                    image={projectsImage}
                    destination="/projects"
                    onMouseEnter={() => handleMouseEnter(projectsImage)}
                    onMouseLeave={handleMouseLeave}
                />
                <Button
                    image={aboutImage}
                    destination="/about"
                    onMouseEnter={() => handleMouseEnter(aboutImage)}
                    onMouseLeave={handleMouseLeave}
                />
                <Button
                    image={cvImage}
                    destination="/cv"
                    onMouseEnter={() => handleMouseEnter(cvImage)}
                    onMouseLeave={handleMouseLeave}
                />
                <Button
                    image={contactImage}
                    destination="/contact"
                    onMouseEnter={() => handleMouseEnter(contactImage)}
                    onMouseLeave={handleMouseLeave}
                />
            </div>

            <div
                className="main-image-button"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {showDottedLine && (
                    <svg className="dotted-line-svg" width="100%" height="100%">
                        <line
                            x1={lineCoordinates.x1}
                            y1={lineCoordinates.y1}
                            x2={lineCoordinates.x2}
                            y2={lineCoordinates.y2}
                            stroke="black"
                            strokeDasharray="5"
                        />
                    </svg>
                )}
                <img
                    src={hoverImage}
                    alt="Main"
                    className="main-image"
                    onMouseEnter={handleMainImageHover}
                    onMouseLeave={handleMainImageLeave}
                />
            </div>
        </div>
    );
};

export default Home;
