import React from 'react';

const Projects = () => {
    const projectsList = [
        {
            title: 'Fitness Tracker App',
            description: 'Allows users to track fitness progress and goals. Has user-authentication as well as personalized diagrams displaying fitness progress'
        },
        {
            title: 'Anagrams Game',
            description: 'Game Pigeon style anagrams game that keeps track of player stats. Queries a dictionary API and word bank API to validate user guesses.'
        },
        {
            title: 'Wordle Game',
            description: 'NYTimes mini-game style Wordle game. Provides feedback on correct/ incorrect characters, as well as guess length accuracy.'
        }
    ];

    return (
        <div className="webpage projects">
            <h2>Here are some projects I've worked on in the past.</h2>
            <ul>
                {projectsList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Projects;