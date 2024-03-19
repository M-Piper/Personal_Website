import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import mainImage from './buttons/no_selection.png';
import projectsHoverImage from './buttons/projects.png';
import aboutHoverImage from './buttons/about.png';
import cvHoverImage from './buttons/cv.png';
import contactHoverImage from './buttons/contact.png';
import About from './components/About';
import CV from './components/CV';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    const [hovering, setHovering] = useState(false);
    const [hoverImage, setHoverImage] = useState(null);
    const containerRef = useRef(null);
    const featureId = 'home';

    useEffect(() => {
        // Scroll into view on component mount
        const featureElement = document.getElementById(featureId);
        if (featureElement) {
            featureElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []); // Empty dependency array

    const handleMouseEnter = () => {
        setHovering(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
    };

    const handleMouseMove = (event) => {
        const containerRect = containerRef.current.getBoundingClientRect();
        const offsetX = event.clientX - containerRect.left;
        const offsetY = event.clientY - containerRect.top;

        // Check if the mouse is within any of the polygons
        const { project, about, contact, cv } = isPointInPolygons(offsetX, offsetY);

        // Display the corresponding hover image based on which polygon is being hovered over
        if (project) {
            setHoverImage(projectsHoverImage);
        } else if (about) {
            setHoverImage(aboutHoverImage);
        } else if (contact) {
            setHoverImage(contactHoverImage);
        } else if (cv) {
            setHoverImage(cvHoverImage);
        } else {
            setHoverImage(null);
        }

        // Set hovering state to true if hovering over any polygon
        setHovering(project || about || contact || cv);
    };

    const handleClick = (event) => {
        const containerRect = containerRef.current.getBoundingClientRect();
        const offsetX = event.clientX - containerRect.left;
        const offsetY = event.clientY - containerRect.top;


        // Check if the mouse is within any of the polygons
        const { project, about, contact, cv, home } = isPointInPolygons(offsetX, offsetY);

        // Navigate to the respective route based on which polygon is clicked
        if (project) {
            window.location.href = '/projects';
        } else if (about) {
            window.location.href = '/about';
        } else if (contact) {
            window.location.href = '/contact';
        } else if (cv) {
            window.location.href = '/cv';
        } else if (home) {
            window.scrollTo(0, 0);
        }
    };

    const isPointInPolygons = (x, y) => {
        // Define the polygon coordinates for each button
        const projectPoly = [
            [27,246],
            [80,163],
            [166,86],
            [267,39],
            [415,6],
            [424,107],
            [442,318],
            [332,387],
            [308,381]
        ];

        const aboutPoly = [
            [136,621],
            [59,539],
            [8,429],
            [3,334],
            [26,250],
            [118,294],
            [305,380],
            [151,634]
        ];

        const contactPoly = [
            [615,372],
            [891,231],
            [920,310],
            [926,361],
            [904,476],
            [867,540],
            [790,621],
            [668,692]
        ];

        const cvPoly = [
            [415,4],
            [551,10],
            [670,43],
            [795,111],
            [889,227],
            [744,307],
            [614,370],
            [442,314]
        ];

        const homePoly = [
            [153,635],
            [313,393],
            [607,372],
            [657,693],
            [479,726],
            [290,700]
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
        <Router>
            <div className="App">
                <div className="menu-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/cv">CV</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <header className="App-header">
                    <h1>Margaret Piper</h1>
                    <div
                        ref={containerRef}
                        className={`button-container ${hovering ? 'hovering' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        onClick={handleClick}
                    >
                        <img src={mainImage} alt="main-image" className="main-image" />
                        {hovering && hoverImage && <img src={hoverImage} alt="hover-image" className="hover-image" />}
                    </div>
                </header>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
