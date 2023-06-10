// variables

const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('.list-container');

//functions

function addTask(){
    if(inputBox.value === ''){
        alert("You must write the task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }

}