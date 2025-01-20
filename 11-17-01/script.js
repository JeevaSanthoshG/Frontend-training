// Task-1 Sum of keyCode
let input1 = document.getElementById("input1");
let btn1 = document.getElementById("submit-btn1");
let output1 = document.getElementById("output1");


btn1.addEventListener("click", (e) => {
  let res = 0;
  input1.value.split("").forEach((v) => res += v.charCodeAt(0));
  output1.innerText = res;
});

// Task-2, 3 Disable Ctrl+S Option, Close current tab using Ctrl + Shift + q

document.addEventListener("keydown", (e) => {
  if(e.ctrlKey && e.keyCode === 83){
    e.preventDefault();
    alert("You can't save this website");
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode === 81) {
    window.close();
  }
});