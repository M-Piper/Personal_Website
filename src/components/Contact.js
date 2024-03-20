import React, { useEffect, useState } from 'react';
import '../App.css';
import contactHoverImage from '../buttons/contact.png';
import { projectPoly, aboutPoly, contactPoly, cvPoly, homePoly } from './PolygonCoordinates';
import SidebarButton from './SidebarButton';

const Contact = () => {
    const [hoveredImage, setHoveredImage] = useState(contactHoverImage);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = event.clientX;
            const y = event.clientY;
            const isInContactPolygon = isPointInPolygon(x, y, contactPoly);
            setHoveredImage(isInContactPolygon ? contactHoverImage : contactHoverImage);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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

    return (
        <div className="contact-bg">
            {/* Sidebar with buttons */}
            <SidebarButton image={hoveredImage} polygonLabel="Contact" />
            <div id="contactEmail">
                <a href={"mailto:margaret.f.piper@gmail.com"}>margaret.f.piper@gmail.com</a>
            </div>
            <div id="contactInfo">
                <a href={"https://www.linkedin.com/in/margaretpiper/"}>@linkedIn</a>
            </div>
        </div>
    );
};

export default Contact;
