import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthorsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <h2 className='text-center mt-5'>AUTHORS (6)</h2>
                <ul className="list-group mt-5">
                    <li className='list-group-item mt-3'><Link to='/author/1'>Name Surname (posts)</Link></li>
                    <li className='list-group-item mt-3'><Link to='/author/1'>Name Surname (posts)</Link></li>
                    <li className='list-group-item mt-3'><Link to='/author/1'>Name Surname (posts)</Link></li>
                    <li className='list-group-item mt-3'><Link to='/author/1'>Name Surname (posts)</Link></li>
                    <li className='list-group-item mt-3'><Link to='/author/1'>Name Surname (posts)</Link></li>
                    <li className='list-group-item mt-3'><Link to='/author/1'>Name Surname (posts)</Link></li>
                </ul>
            </>
        );
    }
}

export default AuthorsPage;