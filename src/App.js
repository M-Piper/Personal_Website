import React from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CV from './components/CV';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

        </Router>
    );
}

export default App;
