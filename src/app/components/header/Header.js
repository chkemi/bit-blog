import React from 'react';
import Nav from './Nav';

const Header = (props) => {
    return (
        <header className='clearfix'>
            <div className='container'>
                <h1 className='float-left'>BIT BLOG</h1>
                <Nav />
            </div>
        </header>
    );
}

export default Header;