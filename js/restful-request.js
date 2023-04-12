fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


let newPost = {
    id: 2,
    title: 'my first blog',
    author: 'codeup',
}


fetch("http://localhost:3000/posts", {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(newPost)
})