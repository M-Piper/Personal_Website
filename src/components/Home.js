import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.js'
import mainImage from '../buttons/main.png';
import mainHover from '../buttons/mainHover.png'
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

            <div className="main-image-button">
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
