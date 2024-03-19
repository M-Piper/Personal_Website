import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainImage from '../buttons/no_selection.png';
import projectsHoverImage from '../buttons/projects.png';
import aboutHoverImage from '../buttons/about.png';
import cvHoverImage from '../buttons/cv.png';
import contactHoverImage from '../buttons/contact.png';
import PiperButton from './PiperButton';
import '../App.css';
const Home = () => {
    const [hoverImage, setHoverImage] = useState(null);
    const navigate = useNavigate();
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
        } else {
            navigate('/');
        }
    };
    const handleMouseMove = (event) => {
        // Get coordinates of the mouse pointer
        const offsetX = event.nativeEvent.offsetX;
        const offsetY = event.nativeEvent.offsetY;

        // Check if the mouse is within any of the polygons
        const { project, about, contact, cv } = isPointInPolygons(offsetX, offsetY);

        // Set hover image based on which polygon is being hovered over
        if (project) {
            setHoverImage(projectsHoverImage);
        } else if (about) {
            setHoverImage(aboutHoverImage);
        } else if (contact) {
            setHoverImage(contactHoverImage);
        } else if (cv) {
            setHoverImage(cvHoverImage);
        } else {
            setHoverImage(null); // Clear hover image if not hovering over any polygon
        }
        console.log('Hover Image:', hoverImage); // cosole log to debug links issue
    };

    const isPointInPolygons = (x, y) => {
        // Define the polygon coordinates for each button
        const projectPoly = [
            [27, 246],
            [80, 163],
            [166, 86],
            [267, 39],
            [415, 6],
            [424, 107],
            [442, 318],
            [332, 387],
            [308, 381]
        ];

        const aboutPoly = [
            [136, 621],
            [59, 539],
            [8, 429],
            [3, 334],
            [26, 250],
            [118, 294],
            [305, 380],
            [151, 634]
        ];

        const contactPoly = [
            [615, 372],
            [891, 231],
            [920, 310],
            [926, 361],
            [904, 476],
            [867, 540],
            [790, 621],
            [668, 692]
        ];

        const cvPoly = [
            [415, 4],
            [551, 10],
            [670, 43],
            [795, 111],
            [889, 227],
            [744, 307],
            [614, 370],
            [442, 314]
        ];

        const homePoly = [
            [153, 635],
            [313, 393],
            [607, 372],
            [657, 693],
            [479, 726],
            [290, 700]
        ];

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
            <div className="button-container" onMouseMove={handleMouseMove}>
                {/* Pass the 'to' prop to PiperButton */}
                <PiperButton
                    image={mainImage}
                    hoverImage={hoverImage}
                    onClick={handleButtonClick}
                    to={hoverImage === projectsHoverImage ? '/projects' : '/'}
                />
            </div>
        </div>
    );
}

export default Home;