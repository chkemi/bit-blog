import React from 'react';
import PostListItem from './PostListItem';

const PostsList = (props) => {

    const { posts } = props;

    const myPosts = posts.map((post) => {
        return <PostListItem key={post.id} post={post} />
    })

    return (
        <ul className="list-group">
            {myPosts}
        </ul>
    );
}

export default PostsList;