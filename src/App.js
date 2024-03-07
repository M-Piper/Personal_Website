
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CV from './components/CV';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Button from '@mui/material/Button';
import imageButton from './buttons/fruit.png';
function App() {
    const handleButtonClick = () => {
        // Add logic to handle button click
        console.log('Button clicked!');'.'
    };


    return (
      <div className="App">

          <header className="App-header">
            <h1>Margaret Piper</h1>
              <Button variant="text" size="small" style={{display: "flex", flexDirection: "column"}}onClick={handleButtonClick}>
                  <img src={imageButton} width="100" alt="folder"/>
                  <label>Pictures</label>
              </Button>
            <Router>
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/cv" component={CV} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    </Routes>
                </Router>
          </header>
      </div>
  );
}

export default App;
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;*/
