const outputdiv = document.querySelector('.outputcards');
const inputField = document.querySelector('#input');
var addItemFunc = function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        // create newcard div child
        const newcard = document.createElement("div");
        newcard.innerText = inputField.value;
        newcard.classList.add("card-block", "mb-3", "rounded");
        // create delete button
        const del = document.createElement("button");
        del.classList.add("btn", "btn-outline-dark");
        del.innerHTML = 'delete';
        newcard.appendChild(del);
        // create strike-through button
        const done = document.createElement("button");
        del.classList.add("btn", "btn-outline-light");
        del.innerHTML = 'delete';
        newcard.appendChild(del);
        //append to outputdiv
        outputdiv.appendChild(newcard);
        //clear todo input value
        inputField.value = "";
    }
}

var delItemFunc = function (event) {
    console.log(event.target);
    const item = event.target;
    if (item.classList[0] === 'btn') {
        console.log("deleted")
        const todo = item.parentElement;
        todo.remove();
    }
    else {
        item.classList.toggle('completed');
    }
}


inputField.addEventListener('keypress', addItemFunc);
outputdiv.addEventListener('click', delItemFunc);

