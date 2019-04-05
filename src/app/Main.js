import React from 'react';
import PostsPage from './components/posts/PostsPage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import AuthorsPage from './components/authors/AuthorsPage';
import SinglePostPage from './components/posts/SinglePostPage';
import SingleAuthorPage from './components/authors/SingleAuthorPage';
import NewPost from './components/NewPost';

const Main = (props) => {
    return (
        <main className='container'>
            <Switch>
                <Route path='/about' component={AboutPage} />
                <Route path='/authors' component={AuthorsPage} />
                <Route path='/postpage/:id' component={SinglePostPage} />
                <Route path='/author/:id' component={SingleAuthorPage} />
                <Route path='/post/new' component={NewPost} />
                <Route path='/' component={PostsPage} />
            </Switch>
        </main>
    );
}

export default Main;