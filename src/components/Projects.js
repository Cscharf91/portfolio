import React from 'react';
import Battleship from '../../src/images/battleship.png';
import RJS from '../../src/images/rjs-billing.png';
import Chess from '../../src/images/chess.png';
import FBClone from '../../src/images/fb-clone.png';
import TradeTracker from '../../src/images/trade-tracker-preview.png';

const Projects = () => {
    return (
        <div className="projects">
            <h3 className="projects-head">Projects</h3>
            {/* <a href="https://github.com/Cscharf91/" alt="github">Click here to view my full Github</a> */}
            <div className="projects-section">
                <div className="project-container">
                    <p className="project-title">Trade Tracker:</p>
                    <p className="project-bio">Built in Rails and React to enter stock trade data to see how different stategies are performing.</p>
                    <img src={TradeTracker} alt="Trade Tracker" className="project-pic" /><br />
                    <div className="project-desc">
                        <p>Features:</p>
                        <ul>
                            <li>User authorization with Devise, keeping each user's trades private</li>
                            <li>Live data updating with a React front end using a Rails API</li>
                            <li>Filter your trades to see how certain strategies compare to others</li>
                            <li>View statistics to save time number crunching</li>
                        </ul>
                    </div>
                    <div className="btn-container">
                        <a href="https://powerful-chamber-15419.herokuapp.com/" rel="noopener noreferrer" target="_blank"><button>View Website</button></a>
                        <a href="https://github.com/Cscharf91/stock-trade-tracker" rel="noopener noreferrer" target="_blank"><button>View Code</button></a> 
                    </div>
                </div>
                <div className="project-container">
                    <p className="project-title">RJS Billing:</p>
                    <p className="project-bio">A mock-up collection agency website. Made in Rails. Try out admin abilities with username: guest@guest.com password: guestpass1.</p>
                    <img src={RJS} alt="RJS-billing" className="project-pic" /><br />
                    <div className="project-desc">
                        <p>Features:</p>
                        <ul>
                            <li>Full admin-only functionality</li>
                            <li>Add a practice, and add collections associated with that practice</li>
                            <li>Search for collections based off account number, last name, date of birth, or search by practice to see all its collections</li>
                            <li>Scan images and add time-stamped notes to each collection</li>
                            <li>Separate sign-up form for billers, which will notify admins</li>
                        </ul>
                    </div>
                    <div className="btn-container">
                        <a href="https://evening-ridge-12770.herokuapp.com/" rel="noopener noreferrer" target="_blank"><button>View Website</button></a>
                        <a href="https://github.com/Cscharf91/collections-site" rel="noopener noreferrer" target="_blank"><button>View Code</button></a> 
                    </div>
                </div>
                <div className="project-container">
                    <p className="project-title">BookFace:</p>
                    <p className="project-bio">A social network website based off of Facebook. Created in Rails.</p>
                    <img src={FBClone} alt="fb-clone" className="project-pic" /><br />
                    <div className="project-desc">
                        <p>Features:</p>
                        <ul>
                            <li>Create a user, upload your profile picture, and edit your profile info</li>
                            <li>Send friend requests with the ability to accept/deny incoming requests</li>
                            <li>Post, and comment on posts</li>
                            <li>Make posts public (all users can view them), or visible to friends only</li>
                            <li>Like posts</li>
                            <li>Omniauth2 Facebook Login</li>
                        </ul>
                    </div>
                    <div className="btn-container">
                        <a href="https://fast-sierra-54264.herokuapp.com/" rel="noopener noreferrer" target="_blank"><button>View Website</button></a>
                        <a href="https://github.com/Cscharf91/facebook-clone" rel="noopener noreferrer" target="_blank"><button>View Code</button></a> 
                    </div>
                </div>
                <div className="project-container">
                    <p className="project-title">Battleship:</p>
                    <p className="project-bio">The classic game, adapted to the web. Made in react with jest testing.</p>
                    <img src={Battleship} alt="Battleship" className="project-pic" /><br />
                    <div className="project-desc">
                        <p>Features:</p>
                        <ul>
                            <li>Made with test-driven-development practices</li>
                            <li>Place your ships on your board, rotate them vertically or horizontally</li>
                            <li>Start making guesses on the opposing player's board</li>
                            <li>Implemented CPU AI</li>
                            <li>First player to sink all the other's ships wins!</li>
                        </ul>
                    </div>
                    <div className="btn-container">
                        <a href="https://cscharf91.github.io/battleship/" rel="noopener noreferrer" target="_blank"><button>View Website</button></a>
                        <a href="https://github.com/Cscharf91/battleship" rel="noopener noreferrer" target="_blank"><button>View Code</button></a> 
                    </div>
                </div>
                <div className="project-container">
                    <p className="project-title">Chess:</p>
                    <p className="project-bio">Another classic game, made in Ruby to play in the command line.</p>
                    <img src={Chess} alt="Chess" className="chess-pic" /><br />
                    <div className="project-desc">
                        <p>Features:</p>
                        <ul>
                            <li>All legal chess moves (including castling/en passant) developed with a full coordinate based grid system using arrays</li>
                            <li>Each player's move is reviewed every turn for check conditions</li>
                            <li>If there's a check, all moves in response are reviewed for checkmate</li>
                            <li>Save and load your games at any point with serialization</li>
                        </ul>
                    </div>
                    <div className="btn-container">
                        <a href="https://repl.it/@Cscharf91/chess" rel="noopener noreferrer" target="_blank"><button>View Repl.it</button></a>
                        <a href="https://github.com/Cscharf91/chess" rel="noopener noreferrer" target="_blank"><button>View Code</button></a> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;