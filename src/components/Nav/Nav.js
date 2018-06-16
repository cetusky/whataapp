import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav className="navbar navbar-default" >
        <ul>
            <li className="brand">Whataapp</li>
            <li>Click on an image to begin!</li>
            <div>
            <li>Current Score: {props.score} | Highest Score: {props.highScore}  </li>
            </div>
        </ul>
    </nav>
);


export default Nav;