import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthorInfo from './AuthorInfo';
import AuthorAddress from './AuthorAddress';
import AuthorCompany from './AuthorCompany';
import { fetchSingleAuthor } from '../../../services/AuthorServices';

class SingleAuthorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {}
        }
    }

    componentDidMount() {
        fetchSingleAuthor(this.props.match.params.id).then((author) => {
            this.setState({
                author
            })
        })
    }

    render() {
        return (
            <>
                <Link to='/authors'>
                    <span>&lt; All authors</span>
                </Link>
                <h2 className='text-center'>Single Author</h2>
                <AuthorInfo info={this.state.author} />
                <AuthorAddress info={this.state.author} />
                <AuthorCompany info={this.state.author} />
            </>
        );
    }
}

export default SingleAuthorPage;