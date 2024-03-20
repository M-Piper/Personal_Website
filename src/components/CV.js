import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import mainImage from '../buttons/no_selection.png';
import projectsHoverImage from '../buttons/projects.png';
import aboutHoverImage from '../buttons/about.png';
import cvHoverImage from '../buttons/cv.png';
import contactHoverImage from '../buttons/contact.png';
import PiperButton from './PiperButton';
import { projectPoly, aboutPoly, contactPoly, cvPoly, homePoly } from './PolygonCoordinates';

const CV = () => {
    const [hoverImage, setHoverImage] = useState(null);
    const [defaultImage, setDefaultImage] = useState(cvHoverImage)
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
        console.log('Hover Image:', hoverImage); // console log to debug links issue
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
        <div className="cv-bg">
            {/* Sidebar with buttons */}
            <div className="button-container" onMouseMove={handleMouseMove}>
                {/* Pass the 'to' prop to PiperButton */}
                <PiperButton
                    image={defaultImage}
                    hoverImage={hoverImage}
                    onClick={handleButtonClick}
                    smallButton={true}
                    scaleFactor={0.5}
                />
            </div>
            <div className="cv-content">
                <p>
                    <h3>Education:</h3>
                    Computer Programming Diploma, Algonquin College (2023) <br />
                    Masters of Information Studies, University of Ottawa (2016) <br />
                    Master’s of Music, Composition, University of Victoria (2010) <br />
                    Bachelor’s Degree in Music, Wilfrid Laurier University (2008) <br />
                    <h3>Work Experience:</h3>
                    Jr Software Analyst, Department of National Defence (March - Dec. 2023) <br />
                    Systems Librarian, SDG Library (Aug 2020 – Oct 2021) <br />
                    Library and Archives Canada (2016-2020) <br />
                    Archivist, Governance Portfolio, Private Archives <br />
                    Project Librarian, Library and Archives Canada <br />
                    Archival Assistant, Library and Archives Canada<br />
                    Information Management Officer, Canada Revenue Agency (2015) <br />
                    Library Assistant, Canadiana.org (2014) <br />
                    <h3>Professional Development:</h3>
                    Developing with AWS Workshop, 2023 <br />
                    Management Training Workshop, 2020 <br />
                    Transforming and Querying XML with XSLT and XQuery Course, 2020 <br />
                    Resource Description and Access (Library Cataloguing) Course, 2018 <br />
                    Board Member, Canadian Association of Music Libraries, 2018-2020 <br />
                    Conference co-presenter: Ontario Association of Library Technicians, 2021 <br />
                    Conference Co-presenter at Association of Canadian Archivists, 2016 <br />
                    Conference Presenter, Canadian Association of Music Libraries, 2018 <br />
                    <h3>Publications: </h3>
                    <a href="https://thediscoverblog.com/2018/02/06/new-princes-toronto-band/">New Prince Toronto Band </a> (LAC blog post)<br />
                    <a href="https://thediscoverblog.com/2018/02/13/new-additions-to-the-virtual-gramophone-band-and-instrumental-music/"> Instrumental Music </a>(LAC blog post)<br />
                    <a href="https://thediscoverblog.com/2018/01/04/new-additions-to-the-virtual-gramophone-romeo-beaudry/">Roméo Beaudry </a>(LAC blog post)<br />
                    <a href="https://thediscoverblog.com/2017/11/17/new-additions-to-the-virtual-gramophone-henry-burr/">Henry Burr</a>(LAC blog post)<br />
                    <a href="https://cmccanada.org/shop/76656/">Small Rooms for Solo Harp (sheet music publication)</a> <br />
                    <a href="https://music.apple.com/ca/album/canadian-music-for-harp/597495986">Canadian Music for Harp, Lori Gemmell (audio recording)</a>
                </p>
            </div>

        </div>
    );
};

export default CV;
