window.onload = () => {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let value = event.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", (e) => {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      if(answer % 1 === 0){
        screen.value = answer;
      } else {
        screen.value = answer.toFixed(2);
      }
    }
  });

  clear.addEventListener("click", (e) => {
    screen.value = "";
  });
};
