import React, { Component } from 'react';
import PostsList from './PostsList';
import { fetchPosts } from '../../../services/PostServices';

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetchPosts().then((posts) => {
            this.setState({
                posts
            })
        })
    }

    render() {
        if (!this.state.posts.length) {
            return <h1 className='text-center mt-5'>Loading Posts...</h1>
        }

        return (
            <>
                <h1 className='text-center mt-4 mb-5'>POSTS</h1>
                <PostsList posts={this.state.posts} />
            </>
        );
    }
}

export default PostsPage;