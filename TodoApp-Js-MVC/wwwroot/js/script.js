const uri = 'https://localhost:7047/api/Todo'
let todos = [];

function GetItems() {
    console.log('Hello World')

    let myEle = document.getElementById('items');
    let myDiv = document.createElement('h2');
    let result = myEle.appendChild(myDiv);

    fetch(uri)
        .then(response => response.json())
        .then(data => result.textContent = JSON.stringify(data));

}

