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
                <h2>AUTHORS (6)</h2>
                <ul>
                    <li><Link to='/author/1'>Name Surname (posts)</Link></li>
                    <li><Link to='/author/1'>Name Surname (posts)</Link></li>
                    <li><Link to='/author/1'>Name Surname (posts)</Link></li>
                    <li><Link to='/author/1'>Name Surname (posts)</Link></li>
                    <li><Link to='/author/1'>Name Surname (posts)</Link></li>
                    <li><Link to='/author/1'>Name Surname (posts)</Link></li>
                </ul>
            </>
        );
    }
}

export default AuthorsPage;