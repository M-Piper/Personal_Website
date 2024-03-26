import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import mainImage from '../buttons/no_selection.png';
import projectsHoverImage from '../buttons/projects.png';
import aboutHoverImage from '../buttons/about.png';
import cvHoverImage from '../buttons/cv.png';
import contactHoverImage from '../buttons/contact.png';
import homeHoverImage from '../buttons/home.png';
import Sidebar from './Sidebar';

const CV = () => {

    return (
        <div className="cv-bg">
            <Sidebar />
            <div className="cv-container">
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
