const addBtn = document.getElementById("add");
const doneBtn = document.querySelectorAll(".task .done");
const deleteBtn = document.querySelectorAll(".task .delete");

const taskList = document.querySelectorAll(".task");

const text = document.getElementById("text-area");

const task = document.querySelector(".task-demo");

const tasks = document.querySelector(".tasks");

console.log(addBtn);
console.log(doneBtn);
console.log(deleteBtn);

addBtn.addEventListener("click", function () {
  let value = text.value;
  if (value === "") {
    alert("Please enter a task");
  } else {
    text.value = "";
    const textArea = document.querySelector(".task-demo #text");
    textArea.innerHTML = value;
    console.log(textArea);
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = task.innerHTML;
    tasks.append(newTask);
    newTask.querySelector(".done").addEventListener("click", function () {
      if (
        this.parentElement.parentElement.querySelector("#text").style.textDecoration === "line-through") {
        this.parentElement.parentElement.querySelector("#text").style.textDecoration = "none";
        this.title = 'Task done!';
      } else {
        this.parentElement.parentElement.querySelector("#text").style.textDecoration = "line-through";
        this.title = 'Task undone';
      }
    });
    newTask.querySelector(".delete").addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });

  }
});


text.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        addBtn.click();
    }
})