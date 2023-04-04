function hi() {
  console.log("hi");
}
function hello() {
  console.log("Hello");
}

function withSmileEmoji(f) {
  return function () {
    f();
    console.log("😀");
  };
}

hi();
withSmileEmoji(hi)();
