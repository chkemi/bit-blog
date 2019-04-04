import React from 'react';
import PostsPage from './components/posts/PostsPage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import AuthorsPage from './components/authors/AuthorsPage';
import SinglePostPage from './components/posts/SinglePostPage';
import SingleAuthorPage from './components/authors/SingleAuthorPage';

const Main = (props) => {
    return (
        <Switch>
            <Route path='/about' component={AboutPage} />
            <Route path='/authors' component={AuthorsPage} />
            <Route path='/postpage' component={SinglePostPage} />
            <Route path='/author/1' component={SingleAuthorPage} />
            <Route path='/' component={PostsPage} />
        </Switch>
    );
}

export default Main;