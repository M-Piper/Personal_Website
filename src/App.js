import React, { useRef, useState } from 'react';
import './App.css';
import mainImage from './buttons/no_selection.png';
import projectsHoverImage from './buttons/projects.png';
import aboutHoverImage from './buttons/about.png';
import cvHoverImage from './buttons/cv.png';
import contactHoverImage from './buttons/contact.png';

function App() {
    const [hovering, setHovering] = useState(false);
    const [hoverImage, setHoverImage] = useState(null);
    const containerRef = useRef(null);

    const handleMouseEnter = () => {
        setHovering(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
    };

    const handleMouseMove = (event) => {
        const { offsetX, offsetY } = event.nativeEvent;

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

    const isPointInPolygons = (x, y) => {
        // Define the polygon coordinates for each button
        const projectPoly = [
            [582, 264],
            [549, 319],
            [810, 441],
            [965, 368],
            [953, 236],
            [946, 156],
            [938, 71],
            [847, 85],
            [718, 138],
            [632, 202],
            [661, 228]
        ];

        const aboutPoly = [
            [545,543],
            [526,477],
            [524,396],
            [549,318],
            [814,442],
            [663,693],
            [616,647],
            [570,597]
        ];

        const contactPoly = [
            [1109, 451],
            [1418, 299],
            [1446, 375],
            [1451, 452],
            [1420, 566],
            [1352, 649],
            [1296, 698],
            [1197, 755]
        ];

        const cvPoly = [
            [963, 361],
            [936, 65],
            [1006, 67],
            [1044, 76],
            [1111, 87],
            [1164, 99],
            [1221, 120],
            [1272, 152],
            [1345, 200],
            [1387, 253],
            [1415, 299],
            [1113, 447]
        ];

        // Check if the point is within any of the polygons
        const isInsideProject = isPointInPolygon(projectPoly, x, y);
        const isInsideAbout = isPointInPolygon(aboutPoly, x, y);
        const isInsideContact = isPointInPolygon(contactPoly, x, y);
        const isInsideCV = isPointInPolygon(cvPoly, x, y);

        return {
            project: isInsideProject,
            about: isInsideAbout,
            contact: isInsideContact,
            cv: isInsideCV
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

        <div className="App">

            <header className="App-header">
                <h1>Margaret Piper</h1>
        <div className="container">
            <div
                ref={containerRef}
                className={`button-container ${hovering ? 'hovering' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                <img src={mainImage} alt="main-image" className="main-image" />
                {hovering && hoverImage && <img src={hoverImage} alt="hover-image" className="hover-image" />}
            </div>
        </div>
              {/*  <Router>
                    <Routes>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/cv" component={CV} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                    </Routes>
                </Router>*/}
            </header>
        </div>

    );
}

export default App;
