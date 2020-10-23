import React from 'react';
import Battleship from '../../src/images/battleship.png';
import RJS from '../../src/images/rjs-billing.png';

const Projects = () => {
    return (
        <div className="projects">
            <h3 className="projects-head">Projects</h3>
            <div className="projects-section">
                <a href="https://evening-ridge-12770.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="project-container">
                    <p>RJS Billing:</p>
                    <p>A mock-up collection agency website made in Rails. Try out admin abilities with username: guest password: guestpass1</p> 
                    <img src={RJS} alt="battleship" />
                </a>
                <a href="https://cscharf91.github.io/battleship/" rel="noopener noreferrer" target="_blank" className="project-container">
                    <p>Battleship:</p>
                    <p>The classic game, adapted to the web. Made in react with a jest testing suite.</p> 
                    <img src={Battleship} alt="battleship" />
                </a>
                <a href="https://cscharf91.github.io/battleship/" rel="noopener noreferrer" target="_blank" className="project-container">
                    <p>Battleship:</p>
                    <p>The classic game, adapted to the web.</p> 
                    <img src={Battleship} alt="battleship" />
                </a>
                <a href="https://cscharf91.github.io/battleship/" rel="noopener noreferrer" target="_blank" className="project-container">
                    <p>Battleship:</p>
                    <p>The classic game, adapted to the web.</p> 
                    <img src={Battleship} alt="battleship" />
                </a>
            </div>
        </div>
    );
}

export default Projects;