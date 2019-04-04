import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchAuthors } from '../../../services/AuthorServices';

class AuthorsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        fetchAuthors().then((authors) => {
            this.setState({
                authors
            })
        })
    }

    renderAuthors() {
        return this.state.authors.map((author) => {
            return <li key={author.id} className='list-group-item mt-3'><Link to={`/author/${author.id}`}>{author.name}</Link></li>
        })
    }

    render() {
        return (
            <>
                <h2 className='text-center mt-5'>AUTHORS ({this.state.authors.length})</h2>
                <ul className="list-group mt-5">
                    {this.renderAuthors()}
                </ul>
            </>
        );
    }
}

export default AuthorsPage;