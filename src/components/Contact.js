import React, {useEffect} from 'react';
import '../App.css';

const Contact = () => {
    useEffect(() => {
        const featureId = 'contactInfo';
        const featureElement = document.getElementById(featureId);
        if (featureElement) {
            const scrollPosition = featureElement.offsetTop + 500;
            featureElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <div className="contact-bg">
            <div id="contactInfo">
                <a href={"margaret.f.piper@gmail.com"}>margaret.f.piper@gmail.com</a>
            </div>
            <div id="contactInfo">
                <a href={"https://www.linkedin.com/in/margaretpiper/"}>LinkedIn</a>
            </div>
        </div>
    );
};

export default Contact;
