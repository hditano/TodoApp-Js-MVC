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
            const hiddenId = document.querySelector('.hidden-id');
            const modifyLink = document.querySelector('#modify-link');
            const deleteLink = document.querySelector('#delete-link');

            //Clear content

            idContainer.innerHTML = '';
            titleContainer.innerHTML = '';
            descriptionContainer.innerHTML = '';
            isCompletedContainer.innerHTML = '';
            hiddenId.innerHTML = '';

            if (modifyLink || deleteLink) {
                modifyLink.remove();
                deleteLink.remove();
            }


            data.forEach((ele) => {

                let myID = document.createElement('p');
                myID.innerText = ele.todoID;
                myID.classList.add('id');
                myID.setAttribute('data-id', `${ele.todoID}`);
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
                myModifyLink.setAttribute('id', 'modify-link');
                myModifyLink.innerText = 'Modify';
                myModifyLink.classList.add('col', 'btn-sm', 'btn-warning', 'customButton');
                myModifyLink.setAttribute('data-id', `${ele.todoID}`);
                myModifyLink.onclick = (() => OnHideShow(ele.todoID));
                myModifyLink.style.cursor = "pointer";
                iconsContainer.appendChild(myModifyLink);

                let myDeleteLink = document.createElement('p');
                myDeleteLink.setAttribute('id', 'delete-link');
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

    // Get all data-id with ID passed by argument
    let element = document.querySelectorAll(`[data-id="${id}"]`);

    // Get elementId and SetId linked to id argument passed by argument to OnHideShow function

    let elementDataId = document.getElementById('modify-hiddenID');
    elementDataId.setAttribute('data-id', `${id}`);
    console.log(elementDataId.getAttribute('data-id'));


    const modifyItem = document.querySelector('.modifyContainer');

    if (modifyItem.style.display === "none") {
        modifyItem.style.display = "block"
    } else {
        modifyItem.style.display = "none"
    }

    //Takes the object as an argument and returns an array.

    let items = Object.values(element);

    document.getElementById('modify-title').value = items[1].innerText;
    document.getElementById('modify-title').setAttribute('data-id', `${id}`);
    document.getElementById('modify-description').value = items[2].innerText;
    document.getElementById('modify-description').setAttribute('data-id', `${id}`);
    document.getElementById('modify-isCompleted').value = items[3].innerText;
    document.getElementById('modify-isCompleted').setAttribute('data-id', `${id}`);

    let modifyButton = document.createElement('button');
    modifyButton.classList.add('btn', 'btn-primary');
    modifyButton.setAttribute('type', 'submit');
    modifyButton.setAttribute('onclick', `ModifyItem(${id})`);
    modifyButton.innerText = "Modify Item";
    modifyItem.appendChild(modifyButton);

    

}

function ModifyItem(id) {

    const item = {
        title: document.querySelector(`#modify-title[data-id="${id}"]`).value,
        description: document.querySelector(`#modify-description[data-id="${id}"]`).value,
        isCompleted: Boolean(document.querySelector(`#modify-isCompleted[data-id="${id}"]`).value),
        todoID: id
    };

    console.log(`${uri}/${id}`);

    fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .catch(error => console.log('Unable to update item', error));

    return false;




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
        "IsCompleted": Boolean(document.getElementById('IsCompleted').value)
    }

    fetch(`${uri}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    })
        .catch(error => console.log('cannot add new item', error));

    console.log(newItem);

}

