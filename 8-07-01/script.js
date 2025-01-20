// Task-1 Arthmetic operator
let input1_1 = document.getElementById("input1-1");
let input1_2 = document.getElementById("input1-2");
let output1 = document.getElementById("output1");

input1_1.addEventListener("input", () => {
  arthmeticOperator();
});

input1_2.addEventListener("input", () => {
  arthmeticOperator();
});

function arthmeticOperator(){
    output1.innerText =
      "Sum : " +
      (Number(input1_1.value) + Number(input1_2.value)) +
      "\nDifference : " +
      (Number(input1_1.value) - Number(input1_2.value)) +
      "\nProduct : " +
      Number(input1_1.value) * Number(input1_2.value) +
      "\nQuotient : " +
      Number(input1_1.value) / Number(input1_2.value);
}

// Task-2 Is greater than 10 and is divide by 2
let input2 = document.getElementById("input2");
let output2 = document.getElementById("output2");

input2.addEventListener("input", () => {
  let res = "";
  let n = input2.value;
  if(n > 10 && n % 2 == 0){
    res += "Greater than 10 and divide by 2"
  }
  else if(n > 10 && n % 2 !=0){
    res += "Greater than 10 and not divide by 2"
  }
  else if(n < 10 && n % 2 == 0){
    res += "Less than 10 and divide by 2"
  }
  else{
    res += "Less than 10 and not divide by 2"
  }
  output2.innerText = res;
});

// Task-3 Positive or negative

let input3 = document.getElementById("input3");
let output3 = document.getElementById("output3");

input3.addEventListener("input", () => {
  let n = input3.value;
  output3.innerText = (n > 0) ? "Positive" : "Negative";
});

// Task-4 Odd or even
let input4 = document.getElementById("input4");
let output4 = document.getElementById("output4");

input4.addEventListener("input", () => {
  let n = input4.value;
  let res = "";
  if(n % 2 == 0){
    res += "Even";
  }
  else{
    res += "Odd";
  }
  output4.innerText = res;
});

// Task-5 Grading system
let input5 = document.getElementById("input5");
let output5 = document.getElementById("output5");

input5.addEventListener("input", () => {
  let n = input5.value;
  let res = "";
  switch (true) {
    case n >= 90 && n <= 100:
      res = "A";
      break;
    case n >= 80 && n < 90:
      res = "B";
      break;
    case n >= 70 && n < 80:
      res = "C";
      break;
    case n >= 0 && n < 70:
      res = "F";
      break;
    default:
      res = "Enter valid mark.";
      break;
  }
  output5.innerText = res;
});

// Task-6 Multiplication table
let input6 = document.getElementById("input6");
let output6 = document.getElementById("output6");

input6.addEventListener("input", () => {
  let n = input6.value;
  for(let i = 1; i <= 10;i++){
    let para = document.createElement("p");
    para.innerText = i+" * "+n+" = "+(n*i);
    output6.appendChild(para);
  }
});


// Task-7 Number of digits
let input7 = document.getElementById("input7");
let output7 = document.getElementById("output7");

input7.addEventListener("input", () => {
  let sum = 0;
  let n = input7.value;
  while(n >= 1){
    n /= 10;
    sum++;
  }
  output7.innerText = sum;
});

// Task-8 Alert
let input8 = document.getElementById("input8");
let output8 = document.getElementById("output8");

input8.addEventListener("click", () => {
  alert("Welcome to my website!");
});

// Task-9 Prompt
let input9 = document.getElementById("input9");
let output9 = document.getElementById("output9");

input9.addEventListener("click", () => {
  let res = "";
  if(confirm("Want to continue...!")){
    res += "You choose to continue!";
  }
  else{
    res += "You canceled!";
  }
  output9.innerHTML = res;
});

// Task-10 Age validation
let input10 = document.getElementById("input10");
let output10 = document.getElementById("output10");

input10.addEventListener("click", () => {
  let age = prompt("Enter the age");
  let res = "";
  if(age >= 18){
    res += "You are elegible!";
  }
  else{
    res += "You not elegible!";
  }
  output10.innerHTML = res;
});

// Task-11 BMI calculator
let input11 = document.getElementById("input11");
let output11 = document.getElementById("output11");

input11.addEventListener("click", () => {
  let height = prompt("Enter the height");
  let weight = prompt("Enter the weight");
  let bmi = (weight / (height * height) *10000);
  alert(bmi);
});

// Task-12 String reverse
let input12 = document.getElementById("input12");
let output12 = document.getElementById("output12");

input12.addEventListener("input", () => {
  let res = "";
  let s = input12.value;
  for(let i = s.length-1;i >= 0;i--){
    res += s.charAt(i);
    output12.innerText = res
  }
});

// Task-13 Vowel count
let input13 = document.getElementById("input13");
let output13 = document.getElementById("output13");

input13.addEventListener("input", () => {
  let sum = 0;
  let s = input13.value;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u') {
      sum += 1;
    }
  }
  output13.innerText = sum;  
});

// Task-14 Is palindrome
let input14 = document.getElementById("input14");
let output14 = document.getElementById("output14");

input14.addEventListener("input", () => {
  let res = "";
  let s = input14.value;
  for(let i = s.length-1;i >= 0;i--){
    res += s.charAt(i);
  }
  output14.innerText = (s === res) ? "Palindrome" : "Not palindrome";
});

// Task-15 Extract initial
let input15 = document.getElementById("input15");
let output15 = document.getElementById("output15");

input15.addEventListener("input", () => {
  let s = input15.value;
  let res = "";
  for(let i = 0;i < s.length;i++){
    if(s.charAt(i).toUpperCase() == s.charAt(i)){
      res += s.charAt(i)+" . ";
    }
    output15.innerText = res;
  }
});

// Task-16 Replace word
let input16 = document.getElementById("input16");
let output16 = document.getElementById("output16");

input16.addEventListener("input", () => {
  let s = input16.value;
  output16.innerText = s.replace("programming", "JavaScript");
});

// Task-17 Split into array
let input17 = document.getElementById("input17");
let output17 = document.getElementById("output17");

input17.addEventListener("input", () => {
  let res = input17.value.split(" ");
  output17.innerText = "[" + res + "]";
});

// Task-18 Remove space
let input18 = document.getElementById("input18");
let output18 = document.getElementById("output18");

input18.addEventListener("input", () => {
  let s = input18.value.split(" ");
  let res = "";
  s.map((e) => {
    res += e;
  })
  output18.innerText = res;
});

// Task-19 Frequency count
let input19_1 = document.getElementById("input19-1");
let input19_2 = document.getElementById("input19-2");
let output19 = document.getElementById("output19");

input19_2.addEventListener("input", () => {
  let s = input19_1.value;
  let ch = input19_2.value.charAt(0);
  let res = 0;
  for(let i = 0;i < s.length;i++){
    if(s.charAt(i) == ch){
      res++;
    }
  }
  output19.innerText = res;
});