let data = [
  { id: 1, name: "Project JS" },
  { id: 2, name: "Project React" },
];
function add_All() {
  const task_innervalue = document.querySelector(".tasks_Input");
  let innerdata = document.querySelector(".text_container");
  localStorage.setItem("object", JSON.stringify(data));
  const Object = localStorage.getItem("object");
  const Objectdata = JSON.parse(Object);
  console.log(Objectdata);
  element = "";
  Objectdata.map(
    (record) =>
      (element += ` <div class="task_container">
            <li class = "todo_text" >${record.name} </li>
            <button onclick = "edits(${record.id})" class= "edit_btn" ><i class="fa-solid fa-pen-to-square"></i></button>
             <button onclick = "Del(${record.id})" class="delete_btn" ><i class="fa-solid fa-trash"></i></button>  
          <button class="check_box" onclick="check_item(this)"><i class="fa-solid fa-check"></i></button>
        </div>
       `)
  );
  innerdata.innerHTML = element;
  task_innervalue.value = "";
}
function add() {
  const tasks_Input = document.querySelector(".tasks_Input").value;
  if (tasks_Input === "") {
    alert("Please enter the task first");
  } else {
    let str = { id: 3, name: tasks_Input };
    data.push(str);
    add_All();
  }
}
function edits(id) {
  document.querySelector(".add_btn").style.display = "none";
  document.querySelector(".update_btn").style.display = "inline";
  let obj = data.find((record) => record.id === id);
  document.querySelector(".tasks_Input").value = obj.name;
  document.querySelector(".id").value = obj.id;
}
function update() {
  let id = parseInt(document.querySelector(".id").value);
  let update_task = document.querySelector(".tasks_Input").value;
  if (update_task === "") {
    alert("Please enter the update task first");
  } else {
    document.querySelector(".add_btn").style.display = "inline";
    document.querySelector(".update_btn").style.display = "none";
    let index = data.findIndex((rec) => rec.id === id);
    data[index] = { id: id, name: update_task };
    add_All();
  }
}
function Del(id) {
  let conf = confirm("Do you really want to delete it");
  if (conf) {
    data = data.filter((rec) => rec.id !== id);
    add_All();
  }
}
function check_item(selected_task) {
  console.log(selected_task);
  let task_name = selected_task.parentElement.firstElementChild;
  console.log(task_name);
  task_name.classList.add("checked_btn");
}
