import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarButton = ({ image, hoverImage, polygonLabel, onClick }) => {
    const [hovering, setHovering] = useState(false);

    const handleMouseEnter = () => {
        setHovering(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
    };

    return (
        <div
            className={`sidebar-button ${hovering ? 'hovering' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to="/" onClick={onClick}>
                <img src={image} alt="sidebar-image" />
                {hovering && hoverImage && <img src={hoverImage} alt="hover-image" />}
                {polygonLabel && <span className="label">{polygonLabel}</span>}
            </Link>
        </div>
    );
}

export default SidebarButton;
