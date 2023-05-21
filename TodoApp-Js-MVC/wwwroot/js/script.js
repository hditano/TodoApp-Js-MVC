const uri = 'https://localhost:7047/api/Todo'
let todos = [];

function GetItems() {
    console.log('Hello')

    let myEle = document.getElementById('items');
    let myDiv = document.createElement('h2');
    let result = myEle.appendChild(myDiv);

    fetch(uri)
        .then(response => response.json())
        .then(data => {
            for (let i in data) {
                console.log(data[i].title)
            }
        })
}

function DeleteItem() {
    console.Log('Delete item');


    fetch(uri)
        .then(response => response.json())
}

