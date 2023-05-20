const uri = 'https://localhost:7047/api/Todo'
let todos = [];

function GetItems() {
    console.log('Hello World')
    fetch(uri)
        .then(response => response.json())
        .then(data => console.log(data));

}

