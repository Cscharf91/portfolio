import React from 'react';

const TechStack = () => {
    return (
        <div className="tech-stack">
            <h3>Languages:</h3>
            <p>Ruby on Rails, JavaScript, CSS3, HTML5, React, PostgreSQL, Ruby, Git, Webpack, Testing with Rspec and Jest</p>
            <div className="stack">
                <img alt="rails" id="rails" src="https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png"/>
                <img alt="javascript" src="https://img.icons8.com/color/48/000000/javascript.png"/>
                <img alt="css" src="https://img.icons8.com/color/48/000000/css3.png"/>
                <img alt="html" src="https://img.icons8.com/color/48/000000/html-5.png"/>
                <img alt="react" id="react" src="https://img.icons8.com/cute-clipart/64/000000/react-native.png"/>
            </div>
        </div>
    );
}

export default TechStack;