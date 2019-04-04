import Post from "../entities/Post";

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(postsArr => postsArr.map((post) => new Post(post.userId, post.id, post.title, post.body)))
}

const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(postObj => new Post(postObj.userId, postObj.id, postObj.title, postObj.body))
}

export {
    fetchPosts,
    fetchSinglePost,
}