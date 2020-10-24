import React from 'react';
// import About from './About';

const Header = () => {
    return (
        <header className="hero">
            <h2 className="title-1">Cory Scharf</h2>
            <h3 className="title-2">Web Developer</h3>
            <div className="learn-more">
                <div className="learn-box">
                    {/* <About /> */}
                    <a href="#about">Learn More</a>
                    {/* TODO: Projects Link */}
                </div>
            </div>
        </header>
    );
}

export default Header;