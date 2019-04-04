import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SinglePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Link to='/'>
                    <span>&lt; Back</span>
                </Link>
                <h1 className='text-center mt-3'>SINGLE POST TITLE</h1>
                <h3 className='text-center mb-4'><Link to='/author/1'>Author Name</Link></h3>

                <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio a odit sunt facere alias ipsa aliquam consectetur excepturi cum pariatur in tempora quas eum eos iusto incidunt veniam laudantium officiis unde perferendis maiores, nam voluptatum sapiente! Velit, sint similique eaque accusantium facilis sunt ab ut expedita assumenda neque mollitia omnis sequi distinctio soluta incidunt odio consequuntur obcaecati cumque molestias quasi impedit saepe tempore perferendis! Optio aut quo ex ipsum animi.</p>
                <hr />

                <h4 className='mt-5'>3 more posts from same author</h4>
                <ul className="list-group mt-4">
                    <li className="list-group-item">
                        <Link to='/postpage'>Title 10</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/postpage'>Title 11</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/postpage'>Title 12</Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default SinglePostPage;