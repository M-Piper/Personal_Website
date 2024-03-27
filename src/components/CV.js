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
import education from '../carousel/education.png';
import work from '../carousel/work.png';
import prof from '../carousel/prof.png';
import pub from '../carousel/pub.png';

import educationThumb from '../carousel/educationThumb.png';
import workThumb from '../carousel/workThumb.png';
import profThumb from '../carousel/profThumb.png';
import pubThumb from '../carousel/pubThumb.png';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

const CV = () => {
    const renderThumbs = (children) => {
        return children.map((child, index) => {
            let thumbnailSrc;
            // Determine the thumbnail image based on the content of the slide
            switch (index) {
                case 0:
                    thumbnailSrc = educationThumb;
                    break;
                case 1:
                    thumbnailSrc = workThumb;
                    break;
                case 2:
                    thumbnailSrc = profThumb;
                    break;
                case 3:
                    thumbnailSrc = pubThumb;
                    break;
                default:
                    thumbnailSrc = null;
            }

            return (
                <div key={index} className="custom-thumb">
                    {thumbnailSrc && <img src={thumbnailSrc} alt={`Thumbnail ${index}`} />}
                </div>
            );
        });
    };


    return (
        <div className="cv-bg">
            <Sidebar />
            <Carousel showArrows={true} showStatus={false} showThumbs={true} renderThumbs={renderThumbs} className="carousel">
                <div className="carousel-slide">
                    <img src={education} alt="Education" className="carousel-image"/>

                    <div className="carousel-content">
                        <p className="slide-text">
                            <u>Education:</u><br />
                            Computer Programming Diploma, Algonquin College (2023) <br />
                            Masters of Information Studies, University of Ottawa (2016) <br />
                            Master’s of Music, Composition, University of Victoria (2010) <br />
                            Bachelor’s Degree in Music, Wilfrid Laurier University (2008) <br />
                        </p>
                    </div>
                </div>
                <div className="carousel-slide">
                    <img src={work} alt="Work" className="carousel-image"/>
                    <div className="carousel-content">
                        <p className="slide-text">
                        <u>Work Experience:</u><br />
                        Jr Software Analyst, Department of National Defence (March - Dec. 2023) <br />
                        Systems Librarian, SDG Library (Aug 2020 – Oct 2021) <br />
                        Library and Archives Canada (2016-2020) <br />
                        Archivist, Governance Portfolio, Private Archives <br />
                        Project Librarian, Library and Archives Canada <br />
                        Archival Assistant, Library and Archives Canada<br />
                        Information Management Officer, Canada Revenue Agency (2015) <br />
                        Library Assistant, Canadiana.org (2014) <br />
                    </p>
                </div>
                </div>
                    <div className="carousel-slide">
                        <img src={prof} alt="Prof" className="carousel-image"/>
                        <div className="carousel-content">
                            <p className="slide-text">
                            <u>Professional Development:</u><br />
                            Developing with AWS Workshop, 2023 <br />
                            Management Training Workshop, 2020 <br />
                            Transforming and Querying XML with XSLT and XQuery Course, 2020 <br />
                            Resource Description and Access (Library Cataloguing) Course, 2018 <br />
                            Board Member, Canadian Association of Music Libraries, 2018-2020 <br />
                            Conference co-presenter: Ontario Association of Library Technicians, 2021 <br />
                            Conference Co-presenter at Association of Canadian Archivists, 2016 <br />
                            Conference Presenter, Canadian Association of Music Libraries, 2018 <br />
                        </p>
                    </div>
                </div>

                <div className="carousel-slide">
                        <img src={pub} alt="Pub" className="carousel-image"/>
                        <div className="carousel-content">
                        <p className="slide-text">
                            <u>Publications: </u><br />
                            <a href="https://thediscoverblog.com/2018/02/06/new-princes-toronto-band/">New Prince Toronto Band </a> (LAC blog post)<br />
                            <a href="https://thediscoverblog.com/2018/02/13/new-additions-to-the-virtual-gramophone-band-and-instrumental-music/"> Instrumental Music </a>(LAC blog post)<br />
                            <a href="https://thediscoverblog.com/2018/01/04/new-additions-to-the-virtual-gramophone-romeo-beaudry/">Roméo Beaudry </a>(LAC blog post)<br />
                            <a href="https://thediscoverblog.com/2017/11/17/new-additions-to-the-virtual-gramophone-henry-burr/">Henry Burr</a>(LAC blog post)<br />
                            <a href="https://cmccanada.org/shop/76656/">Small Rooms for Solo Harp (sheet music publication)</a> <br />
                            <a href="https://music.apple.com/ca/album/canadian-music-for-harp/597495986">Canadian Music for Harp, Lori Gemmell (audio recording)</a>
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default CV;