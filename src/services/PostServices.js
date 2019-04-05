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

const createPost = (title, body, userId) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(post => new Post(post.userId, post.id, post.title, post.body))
}

export {
    fetchPosts,
    fetchSinglePost,
    createPost
}