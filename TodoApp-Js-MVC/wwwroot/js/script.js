const uri = 'https://localhost:7047/api/Todo'
let todos = [];

function GetItems() {

    fetch(uri)
        .then(response => response.json())
        .then(data => {

            const idContainer = document.querySelector('.Id');
            const titleContainer = document.querySelector('.Title');
            const descriptionContainer = document.querySelector('.Description');
            const isCompletedContainer = document.querySelector('.IsCompleted');
            const iconsContainer = document.querySelector('.Icons');

            //Clear content

            idContainer.innerHTML = '';
            titleContainer.innerHTML = '';
            descriptionContainer.innerHTML = '';
            isCompletedContainer.innerHTML = '';

            data.forEach((ele) => {

                let myID = document.createElement('p');
                myID.innerText = ele.todoID;
                idContainer.appendChild(myID);
                let myTitle = document.createElement('p');
                myTitle.innerText = ele.title;
                titleContainer.appendChild(myTitle);
                let myDescription = document.createElement('p');
                myDescription.innerText = ele.description;
                descriptionContainer.appendChild(myDescription);
                let myIsCompleted = document.createElement('p');
                myIsCompleted.innerText = ele.isCompleted;
                isCompletedContainer.appendChild(myIsCompleted);



            })

            for (let i = 0; i < data.length; i++) {

                let mainDiv = document.createElement('div');
                mainDiv.classList.add('container');
                let modifyButton = document.createElement('p');
                modifyButton.innerText = 'Modify'
                modifyButton.classList.add('btn', 'btn-warning', 'btn-sm', 'mr-4');
                modifyButton.onclick = (() => OnHideShow());
                mainDiv.appendChild(modifyButton);
                let trashButton = document.createElement('p');
                trashButton.innerText = 'Delete'
                trashButton.classList.add('btn', 'btn-danger', 'btn-sm')
                mainDiv.appendChild(trashButton);
                iconsContainer.appendChild(mainDiv);
                
            }


        })
}

function OnHideShow() {
    const delItem = document.querySelector('.deleteContainer');

    if (delItem.style.display === "none") {
        delItem.style.display = "block"
    } else {
        delItem.style.display = "none"
    }
}

function DeleteItem() {

    const delItem = document.getElementById('delete-items').value;

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

