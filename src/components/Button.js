import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ image, destination }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(destination);
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
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.filter = 'brightness(150%)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.filter = 'brightness(100%)';
            }}
        />
    );
};

export default Button;
