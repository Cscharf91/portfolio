import React from 'react';
import Battleship from '../../src/images/battleship.png';
import RJS from '../../src/images/rjs-billing.png';
import Chess from '../../src/images/chess.png';

const Projects = () => {
    return (
        <div className="projects">
            <h3 className="projects-head">Projects</h3>
            <a href="https://github.com/Cscharf91/" alt="github">Click here to view my full Github</a>
            <div className="projects-section">
                <div className="project-container">
                    <p className="project-title">RJS Billing:</p>
                    <p>A mock-up collection agency website made in Rails. Try out admin abilities with username: guest@guest.com password: guestpass1</p>
                    <a href="https://github.com/Cscharf91/collections-site" rel="noopener noreferrer" target="_blank"><button>View Code on Github</button></a> 
                    <a href="https://evening-ridge-12770.herokuapp.com/" rel="noopener noreferrer" target="_blank"><button>View Site</button></a><br />
                    <img src={RJS} alt="RJS-billing" />
                </div>
                <div className="project-container">
                    <p className="project-title">Battleship:</p>
                    <p>The classic game, adapted to the web. Made in react with a jest testing suite.</p>
                    <a href="https://cscharf91.github.io/battleship/" rel="noopener noreferrer" target="_blank"><button>View Site</button></a> 
                    <a href="https://github.com/Cscharf91/battleship" rel="noopener noreferrer" target="_blank"><button>View Code on Github</button></a><br />
                    <img src={Battleship} alt="Battleship" />
                </div>
                <div className="project-container">
                    <p className="project-title">BookFace:</p>
                    <p>A Reacreation of Facebook in Rails</p>
                    <a href="https://fast-sierra-54264.herokuapp.com/" rel="noopener noreferrer" target="_blank"><button>View Site</button></a>
                    <a href="https://github.com/Cscharf91/facebook-clone" rel="noopener noreferrer" target="_blank"><button>View Code on Github</button></a><br /> 
                    <h1>TODO: CSS Styling (it currently has a barebones layout)</h1>
                    {/* <img src={Battleship} alt="Battleship" /> */}
                </div>
                <div className="project-container">
                    <p className="project-title">Chess:</p>
                    <p>Another classic game, made in Ruby to play in the command line.</p>
                    <a href="https://repl.it/@Cscharf91/chess" rel="noopener noreferrer" target="_blank"><button>View Repl.it</button></a>
                    <a href="https://github.com/Cscharf91/chess" rel="noopener noreferrer" target="_blank"><button>View Code on Github</button></a><br />
                    <img src={Chess} alt="Chess" />
                </div>
            </div>
        </div>
    );
}

export default Projects;