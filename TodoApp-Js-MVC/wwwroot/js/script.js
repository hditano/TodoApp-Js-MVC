const uri = 'https://localhost:7047/api/Todo'
let todos = [];

function GetItems() {



    fetch(uri)
        .then(response => response.json())
        .then(data => {

            data.forEach((ele) => {
                let myID = document.createElement('p');
                myID.innerText = ele.todoID;
                document.querySelector('.Id').appendChild(myID);
                let myTitle = document.createElement('p');
                myTitle.innerText = ele.title;
                document.querySelector('.Title').appendChild(myTitle);
                let myDescription = document.createElement('p');
                myDescription.innerText = ele.description;
                document.querySelector('.Description').appendChild(myDescription);
                let myIsCompleted = document.createElement('p');
                myIsCompleted.innerText = ele.isCompleted;
                document.querySelector('.IsCompleted').appendChild(myIsCompleted);

            })


        })

}

function DeleteItem() {

    let delItem = document.getElementById('delete-items').value;

    console.log(`${uri}/${delItem}`)
    fetch(`${uri}/${delItem}`, { method: 'DELETE' })
        .then(response => response.json())
}

function AddItem() {
    let newItem = {
        "Title": document.getElementById('add-title').value,
        "Description": document.getElementById('add-description').value,
        "IsCompleted": document.getElementById('IsCompleted').value
    }

    console.log(newItem);

}

