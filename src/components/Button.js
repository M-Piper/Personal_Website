import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ image, destination, onMouseEnter }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(destination);
    };

    const handleMouseEnter = (e) => {
        if (onMouseEnter) {
            onMouseEnter(image); // Call the onMouseEnter callback with the image
        }
        e.target.style.transform = 'scale(1.1)';
        e.target.style.filter = 'brightness(150%)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.filter = 'brightness(100%)';
    };

    return (
        <img
            src={image}
            alt="button"
            onClick={handleClick}
            style={{
                transition: 'transform 0.2s, filter 0.2s',
                filter: 'brightness(100%)'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
};

export default Button;
