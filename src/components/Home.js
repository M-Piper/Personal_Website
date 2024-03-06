import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Home = () => {
    return (
            <div className="home-bg">
            <h1>Home</h1>
            <Link to="/about">About</Link>
            <Link to="/cv">CV</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Home;
