import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mainImage from '../buttons/no_selection.png';
import projectsHoverImage from '../buttons/projects.png';
import aboutHoverImage from '../buttons/about.png';
import cvHoverImage from '../buttons/cv.png';
import contactHoverImage from '../buttons/contact.png';
import homeHoverImage from '../buttons/home.png';
import PiperButton from './PiperButton';
import { projectPoly, aboutPoly, contactPoly, cvPoly, homePoly } from './PolygonCoordinates';
import '../App.css';
const Home = () => {
    const [hoverImage, setHoverImage] = useState(null);
    const [defaultImage, setDefaultImage] = useState(mainImage)
    const [touchStart, setTouchStart] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            setHoverImage(null); // Reset hoverImage state when component unmounts
        };
    }, []);

    const handleButtonClick = () => {
        console.log('Clicked! Hover Image:', hoverImage); // Add this line
        // Determine the appropriate URL based on the current hover state
        let destination;
        if (hoverImage === projectsHoverImage) {
            navigate('/projects');
        } else if (hoverImage === aboutHoverImage) {
            navigate('/about');
        } else if (hoverImage === cvHoverImage) {
            navigate('/cv');
        } else if (hoverImage === contactHoverImage) {
            navigate('/contact');
        } else if (hoverImage === homeHoverImage) {
            navigate('/');

        } else {
            navigate('/');
        }
    };
    const handleMouseMove = (event) => {
        // Get coordinates of the mouse pointer
        const offsetX = event.nativeEvent.offsetX;
        const offsetY = event.nativeEvent.offsetY;

        // Check if the mouse is within any of the polygons
        const { project, about, contact, cv, home } = isPointInPolygons(offsetX, offsetY);

        // Set hover image based on which polygon is being hovered over
        if (project) {
            setHoverImage(projectsHoverImage);
        } else if (about) {
            setHoverImage(aboutHoverImage);
        } else if (contact) {
            setHoverImage(contactHoverImage);
        } else if (cv) {
            setHoverImage(cvHoverImage);
        } else if (home) {
            setHoverImage(homeHoverImage);
        } else {
            setHoverImage(null); // Clear hover image if not hovering over any polygon
        }
        console.log('Hover Image:', hoverImage); // cosole log to debug links issue
    };

    const handleTouchStart = (event) => {
        event.stopPropagation(); // Add this line
        setTouchStart(Date.now());
        const touchX = event.touches[0].clientX; // Get the X coordinate of the touch
        const touchY = event.touches[0].clientY; // Get the Y coordinate of the touch
        const { project, about, contact, cv, home } = isPointInPolygons(touchX, touchY);
        // Set the hover image based on which polygon the touch is within
        if (project) {
            setHoverImage(projectsHoverImage);
        } else if (about) {
            setHoverImage(aboutHoverImage);
        } else if (contact) {
            setHoverImage(contactHoverImage);
        } else if (cv) {
            setHoverImage(cvHoverImage);
        } else if (home) {
            setHoverImage(homeHoverImage);
        } else {
            setHoverImage(mainImage); // Set the default image if the touch is not within any polygon
        }
    };

    const handleTouchEnd = (event) => {
        event.stopPropagation(); // Add this line
        // Navigate to the appropriate page
        if (hoverImage === aboutHoverImage) {
            navigate('/about');
        } else if (hoverImage === cvHoverImage) {
            navigate('/cv');
        } else if (hoverImage === contactHoverImage) {
            navigate('/contact');
        } else if (hoverImage === projectsHoverImage) {
            navigate('/projects');
        } else if (hoverImage === homeHoverImage) {
            navigate('/');
        }
        setHoverImage(null); // Clear hover image when touch ends}
    };

    const isPointInPolygons = (x, y) => {
        // Check if the point is within any of the polygons
        const isInsideProject = isPointInPolygon(projectPoly, x, y);
        const isInsideAbout = isPointInPolygon(aboutPoly, x, y);
        const isInsideContact = isPointInPolygon(contactPoly, x, y);
        const isInsideCV = isPointInPolygon(cvPoly, x, y);
        const isInsideHome = isPointInPolygon(homePoly, x, y);
        return {
            project: isInsideProject,
            about: isInsideAbout,
            contact: isInsideContact,
            cv: isInsideCV,
            home: isInsideHome
        };
    };
    const isPointInPolygon = (polygon, x, y) => {
        let isInside = false;

        // Ray casting algorithm to check if the point is inside the polygon
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i][0];
            const yi = polygon[i][1];
            const xj = polygon[j][0];
            const yj = polygon[j][1];

            const intersect =
                yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

            if (intersect) isInside = !isInside;
        }

        return isInside;
    };

    return (
        <div className="home-bg">
            <h1 className="header">Margaret Piper</h1>
            <div
                className="button-container"
                onMouseMove={handleMouseMove}
            >
                {/* Pass the 'to' prop to PiperButton */}
                <PiperButton
                    image={mainImage}
                    hoverImage={hoverImage}
                    onClick={handleButtonClick}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    scaleFactor={0.8}
                />
            </div>
        </div>
    );
}

export default Home;