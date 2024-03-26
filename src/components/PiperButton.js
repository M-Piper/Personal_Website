import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const PiperButton = ({ image, hoverImage, onClick, to, smallButton, scaleFactor }) => {
    const [hovering, setHovering] = useState(false);

    //Touch response for touch screen devices
    const [touching, setTouching] = useState(false);

    const handleMouseEnter = () => {
        setHovering(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
    };


    const handleTouchStart = () => {
        setTouching(true);
        // Show hover image when touched
        setHovering(true);
    };

    const handleTouchEnd = () => {
        // Hide hover image when touch ends
        setHovering(false);
        // Navigate to the link if onClick exists
        if (onClick) {
            onClick();
        }
    };


    return (
        <div
            className={`button-container ${smallButton ? 'small-button' : ''} ${hovering ? 'hovering' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={onClick}
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
