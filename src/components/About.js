import React from 'react';
import headshot from '../../src/images/headshot.jpg';

const About = () => {
    return (
        <div id="about">
            <h2>About</h2>
            <div className="headshot-container">
                <img className="headshot" src={headshot} alt="headshot" />
            </div>
            <div className="about-info">
                <p>I'm Cory Scharf, a full stack Developer who loves creating clean, responsive websites.</p>
                <p>When I'm not developing, I enjoy playing the piano, hiking, and working out.</p>
            </div>
        </div>
    );
}

export default About;