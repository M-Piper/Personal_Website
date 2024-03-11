import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const CV = () => {
    useEffect(() => {
        const featureId = 'education';
        const featureElement = document.getElementById(featureId);
        if (featureElement) {
            const scrollPosition = featureElement.offsetTop + 200;
            featureElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="cv-bg">
            <div className="menu-links">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/cv">CV</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="cv-content">
                <div id="education">
                    <h2>Education</h2>
                    <p>Computer Programming Diploma, Algonquin College (2023)
                        Masters of Information Studies, University of Ottawa	(2016)
                        Master’s of Music, Composition, University of Victoria (2010)
                        Bachelor’s Degree in Music, Wilfrid Laurier University (2008)
                    </p>
                </div>
                <div id="experience">
                    <h2>Work Experience</h2>
                    <p>Junior Software Analyst, Department of National Defence (March 2023 – present)
                        Systems Librarian, SDG Library (August 2020 – October 2021)
                        Library and Archives Canada (2016-2020)
                        Archivist, Governance Portfolio, Private Archives (January 2020-August 2020)
                        Project Librarian, Library and Archives Canada (November 2016 – December 2019)
                        Archival Assistant, Library and Archives Canada (September 2015 – November 2016)
                        Information Management Officer, Canada Revenue Agency (May-August 2015)
                        Library Assistant, Canadiana.org (2014)
                    </p>
                </div>
                <div id="development">
                    <h2>Professional Development & Publications</h2>
                    <p> Developing with AWS (2023)
                        Management Training (2020)
                        Transforming and Querying XML with XSLT and XQuery (2020)
                        Resource Description and Access (Library Cataloguing) (2018)
                        Board Member, Canadian Association of Music Libraries, 2018-2020
                        Conference co-presenter: Ontario Association of Library Technicians, 2021
                        Conference Co-presenter at Association of Canadian Archivists, 2016
                        Conference Presenter (on behalf of LAC), Canadian Association of Music Libraries, 2018
                        Library and Archives Canada Blog - various publications:
                        <a href="https://thediscoverblog.com/2018/02/06/new-princes-toronto-band/">New Prince Toronto Band, </a>
                        <a href="https://thediscoverblog.com/2018/02/13/new-additions-to-the-virtual-gramophone-band-and-instrumental-music/"> Instrumental Music, </a>
                        <a href="https://thediscoverblog.com/2018/01/04/new-additions-to-the-virtual-gramophone-romeo-beaudry/">Roméo Beaudry, </a>
                        <a href="https://thediscoverblog.com/2017/11/17/new-additions-to-the-virtual-gramophone-henry-burr/">and Henry Burr</a>
                        <a href="https://cmccanada.org/shop/76656/">Small Rooms for Solo Harp (sheet music publication)</a>
                        <a href="https://music.apple.com/ca/album/canadian-music-for-harp/597495986">Canadian Music for Harp, Lori Gemmell (audio recording)</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CV;
