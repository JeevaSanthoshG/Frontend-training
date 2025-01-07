// Task-1
let input1 = document.getElementById("input1");
let output1 = document.getElementById("output1");

input1.addEventListener("input", () => {
  output1.innerText = (input1.value % 2 == 0) ? "Even" : "Odd";
});

// Task-2
let input2 = document.getElementById("input2");
let output2 = document.getElementById("output2");

function print1to10() {
  for (let i = 1; i < 11; i++) {
    let para = document.createElement("p")
    para.innerHTML = i;
    output2.appendChild(para);
  }
}

// Task-3

let input3 = document.getElementById("input3");
let output3 = document.getElementById("output3");

input3.addEventListener("input", () => {
  let n = input3.value;
  for (let i = 1; i <= 30; i++) {
    if (i % n == 0) {
      let para = document.createElement("p");
      para.innerHTML = i;
      output3.appendChild(para);
    }
  }
});

// Task-4
let input4 = document.getElementById("input4");
let output4 = document.getElementById("output4");

input4.addEventListener("input", () => {
  let n = input4.value;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if(n % i == 0) sum += 1;
  }
  output4.innerText = (sum == 2) ? "Prime" : "Not Prime";
});

// Task-5
let input5 = document.getElementById("input5");
let output5 = document.getElementById("output5");

input5.addEventListener("input", () => {
  let n = input5.value;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  output5.innerText = sum;
});

// Task-6
let input6 = document.getElementById("input6");
let output6 = document.getElementById("output6");

input6.addEventListener("input", () => {
  let arr = input6.value.split(" ");
  output6.innerText = Math.max(...arr);
});


// Task-7
let input7 = document.getElementById("input7");
let output7 = document.getElementById("output7");

input7.addEventListener("input", () => {
  let sum = 0;
  let s = input7.value;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u') {
      sum += 1;
    }
  }
  output7.innerText = sum;  
});

// Task-8
let input8 = document.getElementById("input8");
let output8 = document.getElementById("output8");

input8.addEventListener("input", () => {
  let n = input8.value;
  for(let i = 0;i <= n; i++){
    let para = document.createElement("p");
    let temp = "";
    for(let j = 0;j < i;j++){
      temp+="*";
    }
    para.innerHTML = temp;
    output8.appendChild(para);
  }
});

// Task-9
let input9 = document.getElementById("input9");
let output9 = document.getElementById("output9");

input9.addEventListener("input", () => {
  for (let i = 1; i <= input9.value; i++) {
    let para = document.createElement("p");
    if(i % 3 == 0){
      para.innerHTML = "Fizz";
    }
    else if(i % 5 == 0){
      para.innerHTML = "Buzz";
    }
    else{
      para.innerHTML = i;
    }
    output9.appendChild(para);
  }
});

// Task-10
let input10 = document.getElementById("input10");
let output10 = document.getElementById("output10");

input10.addEventListener("input", () => {
  let n = input10.value;
  let sum = "";
  for (let i = n.length; i >= 0; i--) {
    sum += n.charAt(i);
  }
  output10.innerText = sum;
});