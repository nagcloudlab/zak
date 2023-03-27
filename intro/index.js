//----------------------------------------------
// using DOM api
//----------------------------------------------
const boxEle = document.querySelector(".alert");
const greetBtn = document.querySelector(".btn-primary");
const showBtn = document.querySelector(".btn-success");
const hideBtn = document.querySelector(".btn-danger");

greetBtn.addEventListener("click", (e) => {
  boxEle.innerText = "good morning";
});

hideBtn.addEventListener("click", (e) => {
  boxEle.style.display = "none";
});

showBtn.addEventListener("click", (e) => {
  boxEle.style.display = "block";
});

//----------------------------------------------
// using Timer api
//----------------------------------------------
setInterval(() => {
  const timeNowEle = document.querySelector("#time-now"); // search
  timeNowEle.innerText = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
  });
}, 1000);

//----------------------------------------------
// using XHR/Fetch api
//----------------------------------------------

const topFiveTodosBtn = document.querySelector("#top-5-todos-btn");
const todosBody = document.querySelector("#todos-body");

topFiveTodosBtn.addEventListener("click", (e) => {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((response) => response.json())
    .then((todos) => {
      todosBody.innerHTML = todos
        .map((todo) => {
          return `
                <tr class="${todo.completed ? "bg-success" : ""}">
                    <td>${todo.id}</td> 
                    <td>${todo.title}</td>
                    <td>${todo.userId}</td>
                    <td>${todo.completed}</td>
                </tr>
            `;
        })
        .join("");
    });
});
