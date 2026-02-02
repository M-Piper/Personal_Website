import React from 'react';
import '../App.css';
import Sidebar from './Sidebar';

const Contact = () => {
    return (
        <div className="contact-bg">
            <Sidebar />
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