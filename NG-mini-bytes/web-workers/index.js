let fooBtn = document.getElementById("foo");
let barBtn = document.getElementById("bar");

fooBtn.addEventListener("click", () => {
  if (typeof w == "undefined") {
    w = new Worker("foo-logic.js");
    w.onmessage = (e) => {
      document.getElementById("foo-span").innerHTML = e.data;
    };
  }
});

barBtn.addEventListener("click", () => {
  let i;
  for (i = 0; i < 100; i++) {}
  document.getElementById("bar-span").innerHTML = i;
});
