const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("To-Do-List");

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    const taskText = input.value.trim();
    if(taskText === "") return;

    addTask(taskText);
    input.value="";
    input.focus();
})

function addTask(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    const deletBtn = document.createElement("button");
    deletBtn.textContent = "Delete";

    li.appendChild(span);
    list.appendChild(deletBtn);
    list.appendChild(li);
}

list.addEventListener("click", (event) => {
    const clickElement =event.target;
    if(clickElement.tagName === "Span"){
        clickElement.clasList.toggle("done");
    }

    if(clickElement.tagName ==="Button"){
        clickElement.parentElement.remove();
    }
})
