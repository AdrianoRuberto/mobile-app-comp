var todos = {};
var onlyShowNotDone = false;

function addTodo() {
    var ul = document.getElementById("list");
    var key = ul.childNodes.length;
    var swtch = document.createElement("label");
    var li = document.createElement("li");
    swtch.setAttribute("class", "switch")

    var input = document.createElement("input");
    input.setAttribute("id", "toggle");
    input.setAttribute("type", "checkbox");
    input.addEventListener("click", function () {toggleItem(key, li)});

    todos[key] = false;

    var span = document.createElement("span");
    span.setAttribute("class", "slider round");

    swtch.appendChild(input);
    swtch.appendChild(span);
    li.appendChild(document.createTextNode("Todo item#" + key));
    li.appendChild(swtch);
    ul.appendChild(li);
}

function toggleItem(key, li) {
    todos[key] = !todos[key];
    if (onlyShowNotDone) {
        li.setAttribute("hidden", true);
    }
}

function filteredTodos() {
    onlyShowNotDone = !onlyShowNotDone;
    Array.from(document.querySelectorAll("li"))
        .map((l, i) => (todos[i] && onlyShowNotDone) ? l.setAttribute("hidden", true) : l.removeAttribute("hidden"));
}