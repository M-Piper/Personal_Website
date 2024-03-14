import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

const CV = () => {
    const [activeSection, setActiveSection] = useState(0);
    const sections = ['Education', 'Work Experience', 'Professional Development'];
    const contentRefs = useRef([]);

    useEffect(() => {
        contentRefs.current[activeSection]?.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, [activeSection]);

    const handleNext = () => {
        setActiveSection((activeSection + 1) % sections.length);
    };

    const handlePrev = () => {
        setActiveSection((activeSection - 1 + sections.length) % sections.length);
    };

    const handleSectionClick = (index) => {
        setActiveSection(index);
    };

    return (
        <div className="cv-bg">
            <div className="cv-content">
                <div className="viewscreen">
                    <h2>{sections[activeSection]}</h2>
                    <div ref={(el) => (contentRefs.current[activeSection] = el)}>
                        {/* Content for each section */}
                        {activeSection === 0 && (
                            <p>
                                Computer Programming Diploma, Algonquin College (2023) <br />
                                Masters of Information Studies, University of Ottawa (2016) <br />
                                Master’s of Music, Composition, University of Victoria (2010) <br />
                                Bachelor’s Degree in Music, Wilfrid Laurier University (2008)
                            </p>
                        )}
                        {activeSection === 1 && (
                            <p>
                                Junior Software Analyst, Department of National Defence (March 2023 – present) <br />
                                Systems Librarian, SDG Library (August 2020 – October 2021) <br />
                                Library and Archives Canada (2016-2020) <br />
                                Archivist, Governance Portfolio, Private Archives (January 2020-August 2020) <br />
                                Project Librarian, Library and Archives Canada (November 2016 – December 2019) <br />
                                Archival Assistant, Library and Archives Canada (September 2015 – November 2016) <br />
                                Information Management Officer, Canada Revenue Agency (May-August 2015) <br />
                                Library Assistant, Canadiana.org (2014)
                            </p>
                        )}
                        {activeSection === 2 && (
                            <p>
                                Developing with AWS (2023) <br />
                                Management Training (2020) <br />
                                Transforming and Querying XML with XSLT and XQuery (2020) <br />
                                Resource Description and Access (Library Cataloguing) (2018) <br />
                                Board Member, Canadian Association of Music Libraries, 2018-2020 <br />
                                Conference co-presenter: Ontario Association of Library Technicians, 2021 <br />
                                Conference Co-presenter at Association of Canadian Archivists, 2016 <br />
                                Conference Presenter (on behalf of LAC), Canadian Association of Music Libraries, 2018 <br />
                                Library and Archives Canada Blog - various publications: <br />
                                <a href="https://thediscoverblog.com/2018/02/06/new-princes-toronto-band/">New Prince Toronto Band, </a>
                                <a href="https://thediscoverblog.com/2018/02/13/new-additions-to-the-virtual-gramophone-band-and-instrumental-music/"> Instrumental Music, </a>
                                <a href="https://thediscoverblog.com/2018/01/04/new-additions-to-the-virtual-gramophone-romeo-beaudry/">Roméo Beaudry, </a>
                                <a href="https://thediscoverblog.com/2017/11/17/new-additions-to-the-virtual-gramophone-henry-burr/">and Henry Burr</a> <br />
                                <a href="https://cmccanada.org/shop/76656/">Small Rooms for Solo Harp (sheet music publication)</a> <br />
                                <a href="https://music.apple.com/ca/album/canadian-music-for-harp/597495986">Canadian Music for Harp, Lori Gemmell (audio recording)</a>
                            </p>
                        )}
                    </div>
                </div>
                <div className="navigation-arrows">
                    <button onClick={handlePrev}>&#10094;</button>
                    <button onClick={handleNext}>&#10095;</button>
                </div>
            </div>
            <div className="section-links">
                {sections.map((section, index) => (
                    <button key={index} onClick={() => handleSectionClick(index)}>{section}</button>
                ))}
            </div>
        </div>
    );
};

export default CV;
