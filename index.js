const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");



function clear() {
    return   inputBox.value = "";
}


function addTask() {
        if (inputBox.value === "") {
            alert("You must write something!!")
        }

        else {
            const li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            const span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            clear();
            saveData();
        }

}
listContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
        saveData();
    }
    else if(event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();







