import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import canFlyLogo from '../buttons/canfly.png';
import mainImage from '../buttons/no_selection.png';
import projectsHoverImage from '../buttons/projects.png';
import aboutHoverImage from '../buttons/about.png';
import cvHoverImage from '../buttons/cv.png';
import contactHoverImage from '../buttons/contact.png';
import { projectPoly, aboutPoly, contactPoly, cvPoly, homePoly } from './PolygonCoordinates';
import SidebarButton from './SidebarButton';
const Projects = () => {

    const [hoveredImage, setHoveredImage] = useState(projectsHoverImage); // Default image

    // Function to determine which polygon the mouse is hovering over
    const getHoveredImage = (x, y) => {
        if (isPointInPolygon(x, y, projectPoly)) {
            return projectsHoverImage;
        } else if (isPointInPolygon(x, y, aboutPoly)) {
            return aboutHoverImage;
        } else if (isPointInPolygon(x, y, contactPoly)) {
            return contactHoverImage;
        } else if (isPointInPolygon(x, y, cvPoly)) {
            return cvHoverImage;
        } else {
            return mainImage; // Default image if not hovering over any polygon
        }
    };

    // Function to check if a point is inside a polygon
    const isPointInPolygon = (x, y, polygon) => {
        let inside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i][0];
            const yi = polygon[i][1];
            const xj = polygon[j][0];
            const yj = polygon[j][1];
            const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
            if (intersect) inside = !inside;
        }
        return inside;
    };

    // Event handler for mouse movement to update hover image
    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const image = getHoveredImage(x, y);
        setHoveredImage(image);
    };

    return (
        <div className="projects-bg" onMouseMove={handleMouseMove}>
            {/* Sidebar with buttons */}
            <SidebarButton image={hoveredImage} polygonLabel="Projects" />
            <div id="mainProjects">
                <Link to="#" className="large-button">
                    <img src={canFlyLogo} alt="CanFly Logo" className="project-button-image"/>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
