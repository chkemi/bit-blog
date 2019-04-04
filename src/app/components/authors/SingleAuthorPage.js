import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthorInfo from './AuthorInfo';
import AuthorAdress from './AuthorAddress';
import AuthorCompany from './AuthorCompany';

class SingleAuthorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Link to='/authors'>
                    <span>&lt; All authors</span>
                </Link>
                <h2>Single Author</h2>
                <AuthorInfo />
                <AuthorAdress />
                <AuthorCompany />
            </>
        );
    }
}

export default SingleAuthorPage;