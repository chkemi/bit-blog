import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = (props) => {
    return (
        <li className="list-group-item border-0 mt-3">
            <Link to='/postpage'>
                <h3>{props.post.title}</h3>
            </Link>
            <p>{props.post.body}</p>
        </li>
    );
}

export default PostListItem;