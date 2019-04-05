import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createPost } from '../../services/PostServices';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            contentValue: '',
            disabled: true
        }

        this.changedTitle = this.changedTitle.bind(this)
        this.changedContent = this.changedContent.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.onCreate = this.onCreate.bind(this);
    }

    onCreate(e) {
        createPost(this.state.titleValue, this.state.contentValue, 1);
    }

    changedTitle(e) {
        this.setState({
            titleValue: e.target.value,
            contentValue: this.state.contentValue
        })

        this.validateForm(e.target.value, this.state.contentValue)
    }

    changedContent(e) {
        this.setState({
            titleValue: this.state.titleValue,
            contentValue: e.target.value
        })

        this.validateForm(this.state.titleValue, e.target.value)
    }

    validateForm(title, content) {
        if ((title.length > 3 && title.length < 50) && (content.length > 10 && content.length < 400)) {
            this.setState({
                disabled: false
            })
        } else {
            this.setState({
                disabled: true
            })
        }
    }

    render() {
        return (
            <>
                <h1 className='text-center mt-4'>NEW POST</h1>
                <form className='mt-3'>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Title</label>
                        <input className="form-control" type="text" placeholder="Post title" onChange={this.changedTitle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Content</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Multi-line textarea' onChange={this.changedContent}></textarea>
                    </div>
                    <div className='mt-4'>
                        <Link to='/'><button type="button" className="btn btn-primary btn-lg" >Cancel</button></Link>
                        <Link to='/'><button type="button" className="btn btn-primary btn-lg ml-3" disabled={this.state.disabled} onClick={this.onCreate}>Create</button></Link>
                    </div>
                </form>
            </>
        );
    }
}

export default NewPost;