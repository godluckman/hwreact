let arr = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Pineapples', 'Mangos'];
let listOfElem = [];
let list = document.getElementById("list");

function setList(arr) {

    arr.forEach(function(element) {
        listOfElem.push("<li>" + element + "</li>");
    });
    list.innerHTML = listOfElem.join('');
}


document.getElementById('button').onclick = function() {
    let inputValue = document.getElementById("myinput").value
    if (inputValue) {
        listOfElem.push("<li>" + inputValue + "</li>");
        list.innerHTML = listOfElem.join('')

    }
    return listOfElem;
}

console.log(listOfElem);
document.getElementById('delete-button').onclick = function() {

}