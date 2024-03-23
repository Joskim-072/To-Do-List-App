const inputBox = document.querySelector('#input-box');
const addBtn = document.querySelector('button');
const listContainer = document.querySelector('#list-container');

//function is performed when the button is clicked
function addTask(event){
            
    if (inputBox.value == "") {
        alert("Please enter a task!");
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(inputBox.value));
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#x58;";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();