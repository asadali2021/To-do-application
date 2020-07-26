var a = document.getElementById('list');

function addToDo(){
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    li.setAttribute("class","text-success font-weight-bold");
    li.setAttribute("id","now");
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class","bg-danger text-white");
    delBtn.setAttribute("id","now");
    delBtn.setAttribute("onclick","deleteItems(this)");
    delBtn.appendChild(delText);
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.setAttribute("class","bg-success text-white");
    editBtn.setAttribute("id","now");
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
    todo_item.value="";
    console.log(li);
}
function deleteItems(e){
    e.parentNode.remove();
}
function editItem(e){
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;
}
function deleteAll(){
    list.innerHTML = "";
}