import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const PiperButton = ({ image, hoverImage, onClick, to, smallButton, scaleFactor }) => {
    const [hovering, setHovering] = useState(false);

    const handleMouseEnter = () => {
        setHovering(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
    };

    const handleClick = () => {
        if (onClick) {
            onClick(); // Call the onClick handler if it exists
        }
    };

    return (
        <div
            className={`button-container ${smallButton ? 'small-button' : ''} ${hovering ? 'hovering' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <Link to={to}>
                <img
                    src={image}
                    alt="main-image"
                    className={`main-image ${smallButton ? 'small-image' : ''}`}
                    style={{ transform: `scale(${scaleFactor})` }} // Apply the scale factor
                />
                {hovering && hoverImage &&
                    <img
                        src={hoverImage}
                        alt="hover-image"
                        className={`hover-image ${smallButton ? 'small-hover-image' : ''}`}
                        style={{ transform: `scale(${scaleFactor})` }} // Apply the scale factor
                    />
                }
            </Link>
        </div>
    );
}


export default PiperButton;
