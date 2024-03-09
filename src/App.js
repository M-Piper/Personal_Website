import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="image-container">
                <img
                    src="https://via.placeholder.com/400x200"
                    alt="Main Image"
                    className="main-image"
                />
                <img
                    src="https://via.placeholder.com/200x200/FFFF00"
                    alt="Second Image"
                    className="second-image"
                />
                <img
                    src="https://via.placeholder.com/400x200/FF5733"
                    alt="Hover Image"
                    className="hover-image"
                />
            </div>
        </div>
    );
}

export default App;
