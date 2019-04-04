import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchSinglePost } from '../../../services/PostServices';
import { fetchSingleAuthor, fetchSingleAuthorPosts } from '../../../services/AuthorServices';

class SinglePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {},
            post: [],
            authorPosts: []
        }
    }

    componentDidMount() {
        this.fetchEverything()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            fetchSinglePost(this.props.match.params.id).then((post) => {
                this.setState({
                    post
                })
            })
        }
    }

    renderMorePosts(posts) {
        return posts.slice(0, 3)
            .map((post) => {
                return (
                    <li key={post.id} className="list-group-item mt-2">
                        <Link to={`/postpage/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                )
            })
    }

    fetchEverything() {
        fetchSinglePost(this.props.match.params.id).then((post) => {
            this.setState({
                post
            })

            fetchSingleAuthor(post.userId).then((author) => {
                this.setState({
                    author
                })
            })

            fetchSingleAuthorPosts(post.userId).then((authorPosts) => {
                this.setState({
                    authorPosts
                })
            })
        })
    }

    render() {

        if (!this.state.authorPosts.length) {
            return <h2>Loading...</h2>
        }

        return (
            <>
                <Link to='/'>
                    <span>&lt; Back</span>
                </Link>
                <h1 className='text-center mt-3'>{this.state.post.title}</h1>
                <h3 className='text-center mt-3 mb-4'><Link to={`/author/${this.state.post.userId}`}>{this.state.author.name}</Link></h3>

                <p className='mt-5'>{this.state.post.body}</p>
                <hr />

                <h4 className='mt-5'>3 more posts from same author</h4>
                <ul className="list-group mt-4">
                    {this.renderMorePosts(this.state.authorPosts)}
                </ul>
            </>
        );
    }
}

export default SinglePostPage;