import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import contactHoverImage from './buttons/contact.png';
import About from './components/About';
import CV from './components/CV';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import PiperButton from './components/PiperButton';
import reportWebVitals from './reportWebVitals';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
