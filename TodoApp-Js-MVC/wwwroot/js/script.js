const uri = 'https://localhost:7047/api/Todo'
let todos = [];

function GetItems() {

    fetch(uri)
        .then(response => response.json())
        .then(data => {

            const idContainer = document.querySelector('.Ids');
            const titleContainer = document.querySelector('.Titles');
            const descriptionContainer = document.querySelector('.Descriptions');
            const isCompletedContainer = document.querySelector('.IsCompleteds');
            const iconsContainer = document.querySelector('.Icons');

            //Clear content

            idContainer.innerHTML = '';
            titleContainer.innerHTML = '';
            descriptionContainer.innerHTML = '';
            isCompletedContainer.innerHTML = '';

            data.forEach((ele) => {

                let myID = document.createElement('p');
                myID.innerText = ele.todoID;
                myID.classList.add('id');
                idContainer.appendChild(myID);

                let myTitle = document.createElement('p');
                myTitle.innerText = ele.title;
                myTitle.classList.add('title');
                myTitle.setAttribute('data-id', `${ele.todoID}`);
                titleContainer.appendChild(myTitle);

                let myDescription = document.createElement('p');
                myDescription.innerText = ele.description;
                myDescription.classList.add('description');
                myDescription.setAttribute('data-id', `${ele.todoID}`);
                descriptionContainer.appendChild(myDescription);

                let myIsCompleted = document.createElement('p');
                myIsCompleted.innerText = ele.isCompleted;
                myIsCompleted.classList.add('isCompleted');
                myIsCompleted.setAttribute('data-id', `${ele.todoID}`);
                isCompletedContainer.appendChild(myIsCompleted);

                let myModifyLink = document.createElement('p');
                myModifyLink.setAttribute('href', `#`);
                myModifyLink.innerText = 'Modify';
                myModifyLink.classList.add('col', 'btn-sm', 'btn-warning', 'customButton');
                myModifyLink.setAttribute('data-id', `${ele.todoID}`);
                myModifyLink.onclick = (() => OnHideShow(ele.todoID));
                myModifyLink.style.cursor = "pointer";
                iconsContainer.appendChild(myModifyLink);

                let myDeleteLink = document.createElement('p');
                myDeleteLink.setAttribute('href', `#`);
                myDeleteLink.innerText = 'Delete';
                myDeleteLink.classList.add('col', 'btn-sm', 'btn-danger', 'customButton');
                myDeleteLink.setAttribute('data-id', `${ele.todoID}`);
                myDeleteLink.style.cursor = "pointer";
                iconsContainer.appendChild(myDeleteLink);

            })

        })
}

function OnHideShow(id) {

    let element = document.querySelectorAll(`[data-id="${id}"]`);


    const delItem = document.querySelector('.modifyContainer');

    if (delItem.style.display === "none") {
        delItem.style.display = "block"
    } else {
        delItem.style.display = "none"
    }

    document.getElementById('modify-title').value = element.innerText;
    document.getElementById('modify-description').value = element.innerText;
    document.getElementById('modify-isCompleted').value = element.innerText;
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

