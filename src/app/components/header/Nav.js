import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <ul className='nav float-right'>
            <li className="nav-item border-right"><Link className='nav-link' to='/'>Home</Link></li>
            <li className="nav-item border-right"><Link className='nav-link' to='/authors'>Authors</Link></li>
            <li className="nav-item"><Link className='nav-link' to='/about'>About</Link></li>
        </ul>
    );
}

export default Nav;