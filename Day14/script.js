// Task-1 Even or odd
let input1 = document.getElementById("input1");
let output1 = document.getElementById("output1");

input1.addEventListener("input", () => {
  let s = input1.value.split(" ");
  let res = "i";
  s.map((e) => {
    if(res.length < e.length){
      res = e;
    }
  })
  output1.innerText = res;
});

// Task-2 Change repeat as "CHANGED"
let input2 = document.getElementById("input2");
let output2 = document.getElementById("output2");

input2.addEventListener("input", () => {
  let s = input2.value.split(" ");  
  let res = "";
  let occ = [];
  console.log(occ);
  s.map((e) => {
    if(occ.includes(e)){
      res += "CHANGED "
    }
    else{
      occ.push(e);
      res += e+" ";
    }
  })
  output2.innerText = res;
});

// Task-3 Put EVEN in even position
let input3 = document.getElementById("input3");
let output3 = document.getElementById("output3");

input3.addEventListener("input", () => {
  let s = input3.value.split(" ");
  let res = "";
  for(let i = 0;i < s.length;i++){
    if(i % 2 == 0){
      res += "EVEN ";
    }
    else{
      res += s[i] + " ";
    }
  }
  output3.innerHTML = res;
});

// Task-4 Is prime
let input4 = document.getElementById("input4");
let output4 = document.getElementById("output4");

input4.addEventListener("input", () => {
  let s = input4.value.split("");
  let occ = [];
  let res = "";
  for(let i = 0;i < s.length;i++){
    if(!occ.includes(s[i])){
      occ.push(s[i]);
      res += s[i];
    }
  }
  output4.innerHTML = res;
});
