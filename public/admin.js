const { json } = require("body-parser");

// Your Code Here
let response = await fetch('http://localhost:3001/listBooks'{
    method: "GET"
});
let books = await response.json();
console.log(books);


let response = await fetch('http://localhost:3001/updateBook',{
method: "PATCH",
headers:{
    'Content-Type': 'application/json'}
    body: json.stringify({
       "id" : 3
       "title" : 
    })
});
let updatedBook = await response.json();
console.log(updatedBook)
