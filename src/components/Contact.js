import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import mainImage from '../buttons/no_selection.png';
import projectsHoverImage from '../buttons/projects.png';
import aboutHoverImage from '../buttons/about.png';
import cvHoverImage from '../buttons/cv.png';
import contactHoverImage from '../buttons/contact.png';
import homeHoverImage from '../buttons/home.png';
import Sidebar from './Sidebar';


const Contact = () => {


    return (

        <div className="contact-bg">
            <Sidebar/>
            <div className="contact-container">

                <div id="contactInfo">

                    <a href={"mailto:margaret.f.piper@gmail.com"}>margaret.f.piper@gmail.com</a>
                </div>
                <div id="contactInfo">
                <a href={"https://www.linkedin.com/in/margaretpiper/"}>@linkedIn</a>
                </div>
                <div id="contactInfo">
                <a href={"https://github.com/M-Piper"}>@github</a>
                </div>
            </div>

        </div>
    );
};

export default Contact;
