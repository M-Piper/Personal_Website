import React, { useEffect, useState } from 'react';
import '../App.css';
import mainImage from '../buttons/no_selection.png';
import projectsHoverImage from '../buttons/projects.png';
import aboutHoverImage from '../buttons/about.png';
import cvHoverImage from '../buttons/cv.png';
import contactHoverImage from '../buttons/contact.png';
import SidebarButton from './SidebarButton';
import { projectPoly, aboutPoly, contactPoly, cvPoly, homePoly } from './PolygonCoordinates';

const About = () => {

    const [hoveredImage, setHoveredImage] = useState(aboutHoverImage); // Default image

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
        <div className="about-bg" onMouseMove={handleMouseMove}>
            {/* Sidebar with buttons */}
            <SidebarButton image={hoveredImage} polygonLabel="About" />
            <div className="about-content">
                <div id="aboutMargaret">
                    <p>While new to working as a developer, Margaret is no stranger to the Canadian workforce. From her diverse background as a professional musician, librarian, archivist, and now IT professional, her creativity shines through all of her work experiences. She is known for her strong work ethic, creativity, and ability to learn on the fly.</p>
                    <p>Margaret enjoyed a lengthy career in the field of librarianship and found herself in increasingly technical roles, culminating in a Systems Librarian position. At that point, she decided to make the leap and return to school to learn coding and become a full-stack developer. She was fortunate to be able to work full-time for the Federal Government of Canada in an IT capacity during her studies. And has chosen to pursue work in the private sector.</p>
                    <p>In her spare time, Margaret enjoys sewing, cooking, and gardening. She lives in the countryside between Ottawa and Montreal with her husband and three cats.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
