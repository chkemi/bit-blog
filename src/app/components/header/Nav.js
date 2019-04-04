import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/authors'>Authors</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    );
}

export default Nav;