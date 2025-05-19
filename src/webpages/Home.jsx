import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="webpage home">
            <h2>Welcome to my portfolio :D</h2>
            <p>My name is Xuang and I'm a third-year CS student at the University of Virginia.</p>
            
                <Link to="/">home</Link> <br></br>
                <Link to="/projects">projects</Link> <br></br>
                <Link to="/about">about</Link> <br></br>
                <Link to="/contact">contact</Link> <br></br>
            
        </div>
    );
};
export default Home;