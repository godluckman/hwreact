const addButton = document.getElementById('button');
const deleteButton = document.getElementById('delete-button');
let listOfElem = [];
let list = document.getElementById("list");

function setList(arr) {

    arr.forEach(function(element) {
        listOfElem.push("<li>" + element + "</li>");
    });
    list.innerHTML = listOfElem.join('');
}


addButton.onclick = function() {
    let inputValue = document.getElementById("myinput").value
    if (inputValue) {
        listOfElem.push("<li onclick = 'modify(event)'>" + inputValue + "</li>");
        list.innerHTML = listOfElem.join('');
        if (deleteButton.hasAttribute('disabled'))
            deleteButton.removeAttribute('disabled');
    }
    return listOfElem;
}


deleteButton.onclick = function() {
    console.log(listOfElem);
    listOfElem.pop();
    list.innerHTML = listOfElem.join('');
    if (listOfElem.length === 0)
        deleteButton.setAttribute('disabled', 'disabled');
}

function modify(event){
    
}