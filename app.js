const http = new EasyHTTP;

//get users

    // http.get('https://jsonplaceholder.typicode.com/users')
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

// User Data
const data = {
    name: 'John Doe',
    username: 'johdoe',
    email: 'jdoe@gmail.com'
}

//Create Post
// http.get('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

    //Update Post
http.get('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

    //Delete Post
    http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));
    
