import Author from '../entities/Author';
import Post from '../entities/Post';

const fetchAuthors = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(authorsArray => authorsArray.map((author) => new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.company)))
}

const fetchSingleAuthor = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then((author) => new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.company))
}

const fetchSingleAuthorPosts = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => posts.map(posts => new Post(posts.userId, posts.id, posts.title, posts.body)))
}

export {
    fetchAuthors,
    fetchSingleAuthor,
    fetchSingleAuthorPosts
}