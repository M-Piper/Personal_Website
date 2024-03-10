import React, { useRef, useState } from 'react';
import './App.css';
import mainImage from './buttons/no_selection.png';
import projectsHoverImage from './buttons/projects.png';

function App() {
    const [hovering, setHovering] = useState(false);
    const containerRef = useRef(null);

    const handleMouseEnter = () => {
        setHovering(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
    };

    const handleMouseMove = (event) => {
        const { offsetX, offsetY } = event.nativeEvent;

        // Check if the mouse is within the polygon defined by the coordinates
        if (isPointInPoly(offsetX, offsetY)) {
            setHovering(true);
        } else {
            setHovering(false);
        }
    };

    // Function to check if a point is within a polygon
    const isPointInPoly = (x, y) => {
        // Define the polygon coordinates
        const polyCoords = [
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

        let isInside = false;

        // Ray casting algorithm to check if the point is inside the polygon
        for (let i = 0, j = polyCoords.length - 1; i < polyCoords.length; j = i++) {
            const xi = polyCoords[i][0];
            const yi = polyCoords[i][1];
            const xj = polyCoords[j][0];
            const yj = polyCoords[j][1];

            const intersect =
                yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

            if (intersect) isInside = !isInside;
        }

        return isInside;
    };

    return (
        <div className="container">
            <div
                ref={containerRef}
                className={`button-container ${hovering ? 'hovering' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                <img src={mainImage} alt="main-image" className="main-image" />

                {hovering && <img src={projectsHoverImage} alt="projects-hover-image" className="projects-hover-image" />}
            </div>
        </div>
    );
}

export default App;
